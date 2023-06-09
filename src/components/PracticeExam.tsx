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
    const {score, missedQuestions, showNextButton, setShowNextButton, setMissedQuestions, setShowResult} = usePracticeExamContext();

    const nextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);

        if(examQuestionArray.length-1 === currentQuestion)
        {
          console.log(missedQuestions);
          setExamQuestionsArray(missedQuestions);
          setCurrentQuestion(0);
          setMissedQuestions([]);
        }
        if(examQuestionArray.length === 0){
          
        }
        setShowNextButton(false);
        setShowResult(false);
    }

    return (
      <div>
        <p>Your score is {score}.</p>
        <PracticeExamQuestion examQuestion={examQuestionArray[currentQuestion]}/>
        {showNextButton && <button onClick={nextQuestion}>Next Question</button>}
      </div>
    )
};
  
export default PracticeExam;