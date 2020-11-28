//==========================================================//
// This app is designed and developed by Ronaldo Pangarego  //
// email: ronaldo.pangarego@gmail.com                       //
// github: github.com/rpangarego                            //
// checkout my portofolio --> rpangarego.netlify.app        //
//==========================================================//

import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Title from "../partials/Title";
import Breadcrumb from "../partials/Breadcrumb";
import { useDataLayerValue } from "../../DataLayer";
import { CircularProgress } from "@material-ui/core";

const Exercises = () => {
  // eslint-disable-next-line no-unused-vars
  const [{ exercises }, dispatch] = useDataLayerValue();
  const [loadStatus, setLoadStatus] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoadStatus("Idk why it takes so long to get the data 🤔");
    }, 4000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="exercises">
      <Breadcrumb />
      <Title title="Select Exercises" />

      <div className="exercises-content">
        {exercises.length < 1 ? (
          <div className="loading-foods">
            <CircularProgress />
            <h4 style={{ textAlign: "center", marginTop: "1rem" }}>
              {loadStatus}
            </h4>
          </div>
        ) : (
          <>
            {exercises.map((exercise) => (
              <Link to={`/exercises/${exercise._id}`} key={exercise._id}>
                <div className="exercise-option">
                  <h3>{exercise.title}</h3>
                  <p>{exercise.description}</p>
                </div>
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Exercises;
