//==========================================================//
// This app is designed and developed by Ronaldo Pangarego  //
// email: ronaldo.pangarego@gmail.com                       //
// github: github.com/rpangarego                            //
// checkout my portofolio --> rpangarego.netlify.app        //
//==========================================================//

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
  const breakTimeDuration = 10; //in seconds
  const exerciseDuration = 20; //in seconds
  let isExercise = false;
  let isBreak = false;
  let isCompleted = false;
  let played = [];
  let int = null;

  const [exerciseStatus, setExerciseStatus] = useState(false);
  let [playExercise, setPlayExercise] = useState(0);
  let [nextExercise, setNextExercise] = useState(1);
  let [limitInterval, setLimitInterval] = useState(5); //refer to time interval
  let timeInterval = limitInterval;
  let [currentInterval, setCurrentInterval] = useState(0); //refer to current time interval
  let currentTimeInterval = currentInterval;

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

    if (isCompleted) {
      clearInterval(int);
      int = null;
      // console.log(`redirect to --> "/exercises/${exercisePlaylist._id}/completed"`);
      history.push(`/exercises/${exercisePlaylist._id}/completed`);
    } else {
      checkExerciseStatus();
    }
  };

  const checkExerciseStatus = () => {
    if (exercisePlaylist !== null) {
      // if its not exercise and not break-time either
      if (!isExercise && !isBreak) {
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

        // EXERCISE
      } else if (isExercise && !isBreak) {
        // CONTINUE EXERCISE!
        int = setInterval(() => {
          const current = currentTimeInterval++;
          if (current <= timeInterval) {
            setCurrentInterval(current);
          } else {
            played.push(playExercise);
            // console.log(`Just Played: ${playExercise}`);

            if (nextExercise > exercisePlaylist.exercises.length) {
              isCompleted = true;
              setExerciseValue(false, false, breakTimeDuration, false);
            } else {
              let playIndex = playExercise++;
              setPlayExercise(playIndex);
              let nextIndex = nextExercise++;
              setNextExercise(nextIndex);
              setExerciseValue(false, true, breakTimeDuration, false);
            }
          }
        }, 1000);

        // ITS BREAK-TIME
      } else if (!isExercise && isBreak) {
        int = setInterval(() => {
          const current = currentTimeInterval++;
          if (current <= timeInterval) {
            setCurrentInterval(current);
          } else {
            // console.log(`Break-time! 🍺`);
            setExerciseValue(true, false, exerciseDuration, true);
          }
        }, 1000);
      }
    }
  };

  useEffect(() => {
    if (location.pathname.split("/")[3] === "start") {
      setExerciseValue(false, false, 5, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCancelButton = () => {
    clearInterval(int);
    int = null;
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
                  ? `Exercise: ${exercisePlaylist.title}`
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

              <button className="exercise-button" onClick={handleCancelButton}>
                STOP
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ExerciseStart;
