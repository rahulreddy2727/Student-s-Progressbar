import React from "react";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../data/data";

const now = 60;
// const progressInstance =
export default function Progress() {
  return (
    <>
      <ProgressBar now={now} label={`${now}%`} />;
    </>
  );
}
