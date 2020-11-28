import React, { useEffect, useState } from "react";
import "./index.css";
import Breadcrumb from "../partials/Breadcrumb";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { Link } from "react-router-dom";
import ExerciseDetailContent from "../partials/ExerciseDetailContent";
import { useDataLayerValue } from "../../DataLayer";
import { useHistory } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

const ExerciseDetails = ({ location }) => {
  const history = useHistory();
  const [{ exercises }, dispatch] = useDataLayerValue();
  const [exerciseData, setExerciseData] = useState(null);
  const exerciseID = location.pathname.split("/")[2];

  useEffect(() => {
    if (!exercises.length) {
      history.push("/exercises");
    }

    const exerciseData = exercises.find(
      (exercise) => exercise._id === exerciseID
    );
    setExerciseData(exerciseData);

    dispatch({
      type: "SET_EXERCISEPLAYLIST",
      exercisePlaylist: exerciseData,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Breadcrumb goBackText="Exercises" backTo="/exercises" />
      <div className="exercise-details">
        {exerciseData === null ? (
          <div className="loading-foods">
            <CircularProgress />
          </div>
        ) : (
          <>
            <div className="exercise-info">
              <h1>{exerciseData.title}</h1>
              <div className="info-details">
                <div className="more-details">
                  <h5>{exerciseData.duration.split(" ")[0]}</h5>
                  <p>Minutes</p>
                </div>
                <div className="more-details">
                  <h5>{exerciseData.exercises.length}</h5>
                  <p>Exercises</p>
                </div>
              </div>

              <Link
                to={`/exercises/${exerciseData._id}/start`}
                className="exercise-button"
              >
                <PlayCircleOutlineIcon />
                Start Exercise
              </Link>
            </div>

            <div className="exercise-content">
              {exerciseData.exercises.map((exercise, index) => (
                <ExerciseDetailContent
                  key={index}
                  imageURL={exercise.imageURL}
                  imageALT={exercise.name}
                  exerciseName={exercise.name}
                  exerciseDuration="20 seconds"
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ExerciseDetails;
