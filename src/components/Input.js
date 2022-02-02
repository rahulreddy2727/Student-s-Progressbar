import React from "react";
import { useState } from "react";
import data from "../data/data";
import Subjects from "./Subjects";
import Form from "react-bootstrap/Form";
import Progress from "./Progress";

export default function Input() {
  const [studentData, setStudentData] = useState({});
  const [studentId, setStudentId] = useState("");

  const getData = (e) => {
    e.preventDefault();
    setStudentId(e.target.value);
  };

  const getStudentData = (e) => {
    e.preventDefault();
    data.map((student) => {
      if (student.id === Number(studentId)) setStudentData(student);
    });
  };

  return (
    <div className="container m-5">
      <h1>Calculate the percentage level of a pgit initerson's marks</h1>
      <br />

      <select className="custom-select" onChange={getData}>
        {data.map((student) => (
          <option value={student.id}>{`Student Id (${student.id})`}</option>
        ))}
      </select>

      <br />
      <button onClick={getStudentData}>get data from server</button>
      <br />
      <br />
      <Subjects studentData={studentData} />
      {/* <Progress studentData={studentData} /> */}
    </div>
  );
}
