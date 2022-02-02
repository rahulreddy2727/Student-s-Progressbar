import React from "react";
import Form from "react-bootstrap/Form";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Subjects = (props) => {
  const { totalPercentage } = props.studentData;

  let variantName;
  if (totalPercentage > 90 && totalPercentage <= 100) {
    variantName = "success";
  } else if (totalPercentage >= 70 && totalPercentage <= 90) {
    variantName = "info";
  } else if (totalPercentage < 70 && totalPercentage >= 31) {
    variantName = "warning";
  } else variantName = "danger";
  return (
    <div>
      <h1>Subjects Percentage</h1>
      <form>
        <Form.Control
          type="text"
          placeholder="Maths%"
          value={`Maths (${
            props.studentData.maths
              ? props.studentData.maths
              : "Click on Get data from server for Results"
          })`}
        />
        <br />
        {/* {props.studentData.physics ? ( */}
        <Form.Control
          type="text"
          placeholder="Physics%"
          value={`Physics (${
            props.studentData.physics
              ? props.studentData.physics
              : "NOT AVAILABLE"
          } )`}
        />

        <br />
        <Form.Control
          type="text"
          placeholder="Chemistry%"
          value={`Chemistry(${
            props.studentData.chemistry
              ? props.studentData.chemistry
              : "NOT AVAILABLE"
          })`}
        />
        <br />
        <Form.Control
          type="text"
          placeholder="Biology%"
          value={`Biology(${
            props.studentData.biology
              ? props.studentData.biology
              : "NOT AVAILABLE"
          })`}
        />
        <br />
        <Form.Control
          type="text"
          placeholder="English%"
          value={`English (${
            props.studentData.english
              ? props.studentData.english
              : "NOT AVAILABLE"
          })`}
        />
      </form>
      <br />
      <br />

      <ProgressBar
        variant={variantName}
        now={totalPercentage}
        label={`${totalPercentage ? totalPercentage : "NOT AVAILABLE"}%`}
      />
    </div>
  );
};

export default Subjects;
