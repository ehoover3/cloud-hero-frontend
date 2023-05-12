
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { questions } from "./data/practiceTestQuestions";
import { terms } from "./data/keyTerms";

import PracticeExam from "./pages/PracticeExam";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import KeyTerms from "./pages/KeyTerms";
import HandsOnTutorials from "./pages/HandsOnTutorials";

function App() {
 
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='practiceexam' element={<PracticeExam questions={questions} />} />
        <Route path='keyterms' element={<KeyTerms terms={terms} />} />
        <Route path='handsontutorials' element={<HandsOnTutorials />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
