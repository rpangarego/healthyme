import React, { useEffect } from "react";
import "./index.css";
import { Link, useHistory } from "react-router-dom";
import Breadcrumb from "../partials/Breadcrumb";
import { useDataLayerValue } from "../../DataLayer";

const ExerciseCompleted = ({ location }) => {
  const history = useHistory();
  const [{ exercisePlaylist }, dispatch] = useDataLayerValue();

  const handleButton = () => {
    dispatch({
      type: "SET_EXERCISEPLAYLIST",
      exercisePlaylist: null,
    });
  };

  useEffect(() => {
    if (
      !exercisePlaylist ||
      exercisePlaylist._id !== location.pathname.split(" ")[2]
    )
      history.push("/exercises");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Breadcrumb goBackText="Home" />
      <div className="exercise-completed">
        <h1 className>Exercise Completed! 🎉</h1>

        <img src="/exercise-completed.webp" alt="Exercise completed!" />

        <div className="nav-buttons">
          <Link
            className="exercise-button"
            to="/exercises"
            onClick={handleButton}
          >
            More Exercise
          </Link>
          <Link className="exercise-button" to="/" onClick={handleButton}>
            Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default ExerciseCompleted;
