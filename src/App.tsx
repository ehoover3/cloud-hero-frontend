import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Game from "./pages/Game";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";

function App() {
  const questions = [
    {
      question: "What is the capital of France?",
      answer: "Paris",
      options: ["Paris", "London", "Madrid", "Berlin"],
    },
    {
      question: "What is the largest country in the world?",
      answer: "Russia",
      options: ["China", "Russia", "Canada", "USA"],
    },
    {
      question: "What is the currency of Japan?",
      answer: "Yen",
      options: ["Yuan", "Yen", "Dollar", "Euro"],
    },
  ];
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='game' element={<Game questions={questions} />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
