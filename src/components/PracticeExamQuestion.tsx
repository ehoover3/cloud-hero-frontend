import { useEffect, useState } from "react";
import { Question } from "../models/QuestionType";
import QuestionOption from "./QuestionOption";
import usePracticeExamContext from "../hooks/use-practiceExam-context";

type Props = {
    examQuestion: Question;
    children?: React.ReactNode;
  }
  
  

  const PracticeExamQuestion = ({ examQuestion } : Props) => {
    const [currentAnswer, setCurrentAnswer] = useState('');
    const {updateScore, updateMissedQuestions, setShowNextButton, showResult, setShowResult} = usePracticeExamContext();
    const [shuffledOptions,  setShuffledOptions] = useState(examQuestion.options);

    useEffect(() => {
      const shuffleOptions = (questionOptions : string[]) =>{
        return [...questionOptions].sort(() => Math.random() - 0.5);
      }
      setShuffledOptions(shuffleOptions(examQuestion.options));
    }, [examQuestion]);


    const handleSelectOption = (option:string) => {
      setCurrentAnswer(option);
    }
    
    const renderedOptions = shuffledOptions.map((option, index) => {
      return <QuestionOption key={index} option={option} handleSelectOption={handleSelectOption}/>
    }
    )

    const checkAnswer = () => {
      return examQuestion.answer === currentAnswer;
    }

    const handleAnswerButtonClick = () => {
      if(currentAnswer===''){
        console.log('Select an option');
        return;
      }
      if(checkAnswer()){
        updateScore();
      } else {
        updateMissedQuestions(examQuestion);
      }
      setShowResult(true);
      setShowNextButton(true);
    }

    const resultDisplay = () => {
      if(checkAnswer()){
        return (
          <div>
            <div>Correct!</div>
            <div>{examQuestion.explanation}</div>
          </div>
        )
      } else {
        return (
            `Wrong. The correct answer is ${examQuestion.answer}.`
        )
      }
    }

    return (
      <div>
        <p>{examQuestion.question}</p>
        <div>
          {renderedOptions}
        </div>
        {!showResult && <button onClick={handleAnswerButtonClick}>Submit</button>}
        {showResult && resultDisplay()}
      </div>
    )
  };
  
  export default PracticeExamQuestion;