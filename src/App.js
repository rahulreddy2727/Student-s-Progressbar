import React from "react";

import "./App.css";
import { useState } from "react";
import Stats from "./components/Progress";
import { Container } from "react-bootstrap";
import Input from "./components/Input";
import Subjects from "./components/Subjects";

function App() {
  return (
    <>
      <Container>
        <Input />
      </Container>
    </>
  );
}

export default App;
