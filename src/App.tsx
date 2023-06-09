
import {   Routes  } from "react-router-dom";
import { terms } from "./data/keyTerms";
import { BrowserRouter as Router, Route } from "react-router-dom";


import PracticeExamPage from "./pages/PracticeExamPage";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import KeyTerms from "./pages/KeyTerms";
import HandsOnTutorials from "./pages/HandsOnTutorials";
import Other from './pages/Other'


function App() {
 
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='practiceexam' element={<PracticeExamPage />} />
        <Route path='keyterms' element={<KeyTerms terms={terms} />} />
        <Route path='handsontutorials' element={<HandsOnTutorials />} />
        <Route path='other' element={<Other />} />
        <Route path='*' element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
