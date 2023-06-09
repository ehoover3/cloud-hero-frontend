import { useState } from "react";
import PracticeExamQuestion from "./PracticeExamQuestion";
import { Question } from "../models/QuestionType";
import usePracticeExamContext from "../hooks/use-practiceExam-context";

type Props = {
  examQuestions: Question[];
}
  
const PracticeExam = ( { examQuestions } : Props) => {
    const [examQuestionArray, setExamQuestionsArray] = useState(examQuestions);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showResetButton, setShowResetButton] = useState(false);
    const {score, setScore, missedQuestions, showNextButton, setShowNextButton, setMissedQuestions, setShowResult} = usePracticeExamContext();

    const nextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);

        if(examQuestionArray.length-1 === currentQuestion && !(missedQuestions.length === 0))
        {
          setCurrentQuestion(0);
          setExamQuestionsArray(missedQuestions);
          setMissedQuestions([]);
        }
        else if(examQuestionArray.length-1 === currentQuestion)
        {
          setShowResetButton(true);
        }
        setShowNextButton(false);
        setShowResult(false);
    }

    const resetExam = () => {
      setCurrentQuestion(0);
      setScore(0);
      setExamQuestionsArray(examQuestions);
      setMissedQuestions([]);
      setShowResetButton(false);
    }

    return (
      <div>
        <p>Your score is {score}.</p>
        {showResetButton ? 
          (<div>
            <button onClick={resetExam}>Reset</button>
          </div>) 
          : 
          (<div>
            <PracticeExamQuestion examQuestion={examQuestionArray[currentQuestion]}/>
            {showNextButton && <button onClick={nextQuestion}>Next Question</button>}
          </div>)
        }
      </div>
    )
};
  
export default PracticeExam;