/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./index.css";
import { useHistory } from "react-router-dom";
import Breadcrumb from "../partials/Breadcrumb";
import { useDataLayerValue } from "../../DataLayer";
import { CircularProgress } from "@material-ui/core";

const ExerciseStart = ({ location }) => {
  const history = useHistory();
  const [{ exercisePlaylist }, dispatch] = useDataLayerValue();
  if (exercisePlaylist == null) history.push("/exercises");

  let exerciseURI = location.pathname.split("/");
  exerciseURI = `/${exerciseURI[1]}/${exerciseURI[2]}`;

  // setup initial state
  const breakTimeDuration = 1; //in seconds
  const exerciseDuration = 3; //in seconds

  let isExercise = false;
  let isBreak = false;
  let played = [];
  let isCompleted = false;

  const [exerciseStatus, setExerciseStatus] = useState(false);
  let [playExercise, setPlayExercise] = useState(0);
  let [nextExercise, setNextExercise] = useState(1);
  const [isPause, setIsPause] = useState(false);

  let [limitInterval, setLimitInterval] = useState(5); //refer to time interval
  let timeInterval = limitInterval;
  let [currentInterval, setCurrentInterval] = useState(0); //refer to current time interval
  let currentTimeInterval = currentInterval;

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

    if (!isCompleted) {
      checkExerciseStatus();
    }
  };

  const checkExerciseStatus = () => {
    // if its not exercise and not break-time either

    if (!isExercise && !isBreak && exercisePlaylist !== null) {
      if (!played.length) {
        // START EXERCISE
        int = setInterval(() => {
          const current = currentTimeInterval++;
          if (currentTimeInterval <= timeInterval + 1) {
            setCurrentInterval(current);
          } else {
            setExerciseValue(true, false, exerciseDuration, true);
            played.push(playExercise);

            let playIndex = playExercise++;
            setPlayExercise(playIndex);
            let nextIndex = nextExercise++;
            setNextExercise(nextIndex);
          }
        }, 1000);
      } else if (played.length & isCompleted) {
        // exercise completed
        console.log("exercise completed!");

        setExerciseValue(false, false, 0, false);
        history.push(`/exercises/${exercisePlaylist._id}/completed`);
      }

      // EXERCISE
    } else if (isExercise && !isBreak && exercisePlaylist !== null) {
      // CONTINUE EXERCISE!
      if (exercisePlaylist.exercises[nextExercise] !== undefined) {
        int = setInterval(() => {
          const current = currentTimeInterval++;
          if (current <= timeInterval) {
            setCurrentInterval(current);
          } else {
            setExerciseValue(false, true, breakTimeDuration, false);
            played.push(playExercise);

            let playIndex = playExercise++;
            setPlayExercise(playIndex);
            let nextIndex = nextExercise++;
            setNextExercise(nextIndex);
          }
        }, 1000);
      } else {
        // EXERCISE IS DONE
        console.log("almost finish!");
        setExerciseValue(true, false, exerciseDuration, false);
        isCompleted = true;
      }

      // ITS BREAK_TIME
    } else if (!isExercise && isBreak && exercisePlaylist !== null) {
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
      setExerciseValue(false, false, exerciseDuration, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePauseButton = () => {
    if (!isPause) {
      clearInterval(int);
    }
    let buttonState = !isPause;
    setIsPause(buttonState);
  };

  const handleCancelButton = () => {
    setExerciseValue(false, false, 0, false);
    dispatch({
      type: "SET_EXERCISEPLAYLIST",
      exercisePlaylist: null,
    });
  };

  return (
    <>
      <Breadcrumb backTo={exerciseURI} onClick={handleCancelButton} />
      <div className="exercise-start">
        {exercisePlaylist === null ? (
          <div className="loading-foods">
            <CircularProgress />
          </div>
        ) : (
          <>
            <div className="exercise-playing-info">
              <h1 className="title">
                {exerciseStatus
                  ? "Exercise: " + exercisePlaylist.title
                  : "Get ready! 💪"}
              </h1>

              <h2 className={`exercise-subtitle ${!exerciseStatus && "muted"}`}>
                {exercisePlaylist.exercises[playExercise].name}
              </h2>

              <p>
                {exercisePlaylist.exercises[nextExercise] !== undefined
                  ? `Next: ${exercisePlaylist.exercises[nextExercise].name}`
                  : ""}
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

              <button className="exercise-button" onClick={handlePauseButton}>
                {!isPause ? "PAUSE" : "PLAY"}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ExerciseStart;
