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
  let isExercise = false;
  let isBreak = false;
  const [played, setPlayed] = useState([]);
  const [playExercise, setPlayExercise] = useState(0);
  const [nextExercise, setNextExercise] = useState(1);

  let [limitInterval, setLimitInterval] = useState(5); //refer to time interval
  let timeInterval = limitInterval;
  let [currentInterval, setCurrentInterval] = useState(0); //refer to current time interval
  let currentTimeInterval = currentInterval;
  let [exerciseProgress, setExerciseProgress] = useState(0);
  // let progress = exerciseProgress;

  let int = null;

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
            clearInterval(int);

            isExercise = true;
            isBreak = false;
            currentTimeInterval = 0;
            setCurrentInterval(0);
            timeInterval = 10;
            setLimitInterval(10);

            console.log(
              "start exercise!! (exercise | break)",
              isExercise,
              isBreak
            );

            checkExerciseStatus();
          }
        }, 1000);
      } else {
        // exercise completed
        console.log("exercise completed!");
      }

      // if its exercise
    } else if (isExercise && !isBreak) {
      // exercise time!
      console.log(
        "exercise starting...! (exercise | break)",
        isExercise,
        isBreak
      );

      int = setInterval(() => {
        const current = currentTimeInterval++;
        if (current <= timeInterval) {
          setCurrentInterval(current);
          console.log(current, timeInterval);
        }
      }, 1000);

      // if its break-time
    } else if (!isExercise && isBreak) {
      // break-time!
      console.log("its break-time!");
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
                {exercisePlaylist.exercises[playExercise].name}
              </h2>
              <p>Next: {exercisePlaylist.exercises[nextExercise].name}</p>
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
