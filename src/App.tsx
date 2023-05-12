import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { questions } from "./data/practiceTestQuestions";
import { terms } from "./data/keyTerms";

import Game from "./pages/Game";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import KeyTerms from "./pages/KeyTerms";

function App() {
 
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='game' element={<Game questions={questions} />} />
        <Route path='keyterms' element={<KeyTerms terms={terms} />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
