import React from "react";
import "./index.css";
import Breadcrumb from "../partials/Breadcrumb";

const About = () => {
  return (
    <>
      <Breadcrumb goBackText="Home" />
      <div className="about">
        <h1>About HealthyMe</h1>
        <p>
          The goal of this app is to help you start your healthy lifestyle from
          doing some exercises and suggest you an ideas of healthy foods with
          recipe included. Also this app provide Body Mass Index (BMI)
          Calculator feature. Give this <strong>HealthyMe</strong> Web-App a try
          to change your healthy lifestyle.
        </p>

        <h6 className="developer">
          <strong>HealthyMe</strong> web-app is build with MERN Stack (ReactJS,
          NodeJS, ExpressJS and MongoDB) by{" "}
          <a
            href="http://rpangarego.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Ronaldo Pangarego
          </a>
          .
        </h6>
      </div>
    </>
  );
};

export default About;
