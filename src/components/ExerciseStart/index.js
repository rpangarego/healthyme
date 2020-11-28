/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./index.css";
import { useHistory } from "react-router-dom";
import Breadcrumb from "../partials/Breadcrumb";
import { useDataLayerValue } from "../../DataLayer";
import { CircularProgress } from "@material-ui/core";

const ExerciseStart = ({ location }) => {
  const history = useHistory();
  const [{ exercisePlaylist }] = useDataLayerValue();
  if (exercisePlaylist == null) history.push("/exercises");

  let exerciseURI = location.pathname.split("/");
  exerciseURI = `/${exerciseURI[1]}/${exerciseURI[2]}`;

  // setup initial state
  // const [exercises, setExercises] = useState([]);

  const breakTimeDuration = 2; //in seconds
  const exerciseDuration = 5; //in seconds

  let isExercise = false;
  let isBreak = false;
  const [exerciseStatus, setExerciseStatus] = useState(false);
  const [played, setPlayed] = useState([]);
  let [playExercise, setPlayExercise] = useState(0);
  let [nextExercise, setNextExercise] = useState(1);

  let [limitInterval, setLimitInterval] = useState(5); //refer to time interval
  let timeInterval = limitInterval;
  let [currentInterval, setCurrentInterval] = useState(0); //refer to current time interval
  let currentTimeInterval = currentInterval;
  let [exerciseProgress, setExerciseProgress] = useState(0);
  // let progress = exerciseProgress;

  let int = null;

  const setExerciseValue = (
    exerciseBoolean,
    breakBoolean,

    limitInt,
    status
  ) => {
    clearInterval(int);

    isExercise = exerciseBoolean;
    isBreak = breakBoolean;
    currentTimeInterval = 0;
    timeInterval = limitInt;
    setCurrentInterval(0);
    setLimitInterval(limitInt);
    setExerciseStatus(status);

    checkExerciseStatus();
  };

  const checkExerciseStatus = () => {
    // if its not exercise and not break-time either

    if (!isExercise && !isBreak) {
      if (!played.length) {
        // initial exercise / start exercise
        console.log("initial exercise (exercise | break)", isExercise, isBreak);

        int = setInterval(() => {
          const current = currentTimeInterval++;
          if (currentTimeInterval <= timeInterval + 1) {
            setCurrentInterval(current);
          } else {
            setExerciseValue(true, false, exerciseDuration, true);
          }
        }, 1000);
      } else {
        // exercise completed
        console.log("exercise completed!");
        history.push(`/exercises/${exercisePlaylist}/completed`);
      }

      // if its exercise
    } else if (isExercise && !isBreak) {
      // if the nextExercise index is the same value as exercises.length then EXERCISE COMPLETED!!
      if (exercisePlaylist.exercises.length === nextExercise - 1) {
        setExerciseValue(false, false, breakTimeDuration, false);
      }

      // exercise time!
      int = setInterval(() => {
        const current = currentTimeInterval++;
        if (current <= timeInterval) {
          setCurrentInterval(current);
        } else {
          setExerciseValue(false, true, breakTimeDuration, false);

          let playIndex = playExercise++;
          setPlayExercise(playIndex);
          let nextIndex = nextExercise++;
          setNextExercise(nextIndex);
        }
      }, 1000);

      // if its break-time
    } else if (!isExercise && isBreak) {
      int = setInterval(() => {
        const current = currentTimeInterval++;
        if (current <= timeInterval) {
          setCurrentInterval(current);
        } else {
          setExerciseValue(true, false, exerciseDuration, true);
        }
      }, 1000);
    }
  };

  useEffect(() => {
    if (location.pathname.split("/")[3] === "start") {
      checkExerciseStatus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleProgress = () => {
    clearInterval(int);
    console.log("you clicked pause button!!!");
  };

  return (
    <>
      <Breadcrumb backTo={exerciseURI} />
      <div className="exercise-start">
        {exercisePlaylist === null ? (
          <div className="loading-foods">
            <CircularProgress />
          </div>
        ) : (
          <>
            <div className="exercise-playing-info">
              <h1 className="title">{exercisePlaylist.title}</h1>

              <h2 className="exercise-subtitle">
                {!exerciseStatus
                  ? "- Get Ready -"
                  : exercisePlaylist.exercises[playExercise].name}
              </h2>
              <p>
                {exercisePlaylist.exercises[nextExercise].name === undefined
                  ? ""
                  : `Next: ${exercisePlaylist.exercises[nextExercise].name}`}
              </p>
              <h3 className="exercise-timer">
                00:
                {currentInterval > 9 ? currentInterval : `0${currentInterval}`}
              </h3>
            </div>

            <div className="exercise-playing-animate">
              <img
                src={
                  exercisePlaylist.exercises[playExercise].animateImageURL
                    ? exercisePlaylist.exercises[playExercise].animateImageURL
                    : exercisePlaylist.exercises[playExercise].imageURL
                }
                alt={exercisePlaylist.exercises[playExercise].name}
                className="exercise-image"
              />

              <div className="timer-bar">
                <span
                  className="exercise-progress"
                  style={{
                    width: `${(currentInterval / limitInterval) * 100}%`,
                  }}
                ></span>
              </div>

              <button className="exercise-button" onClick={handleProgress}>
                PAUSE
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ExerciseStart;
