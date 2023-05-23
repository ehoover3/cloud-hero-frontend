// TO-DO
// If a user misses a question, show the correct answer, but ask that question again after all other questions have been asked
// Currently, it immediately re-asks the question

import React, { useState } from "react";

type Question = {
  question: string;
  answer: string;
  options: string[];
  explanation: string
};

type Props = {
  questions: Question[];
};

const PracticeExam: React.FC<Props> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [showNextButton, setShowNextButton] = useState(false);
  const [missedQuestions, setMissedQuestions] = useState<number[]>([]);

  const handleAnswerButtonClick = (selectedOption: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    setSelectedOption(selectedOption);
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    } else {
      setMissedQuestions([...missedQuestions, currentQuestionIndex]);
    }
    setShowNextButton(true);
  };

  const handleNextButtonClick = () => {
    if (missedQuestions.length > 0) {
      const nextQuestionIndex = missedQuestions[0];
      setCurrentQuestionIndex(nextQuestionIndex);
      setMissedQuestions(missedQuestions.slice(1));
    } else if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowScore(true);
    }
    setSelectedOption("");
    setShowNextButton(false);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption("");
    setShowNextButton(false);
    setMissedQuestions([]);
  };

  return (
    <div>
      {showScore ? (
        <div>
          <p>Your score is {score}.</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <p>Question {currentQuestionIndex + 1}</p>
          <p>{questions[currentQuestionIndex].question}</p>
          {questions[currentQuestionIndex].options.map((option) => (
            <button key={option} onClick={() => handleAnswerButtonClick(option)} disabled={selectedOption !== ""}>
              {option}
            </button>
          ))}
{selectedOption !== "" && (
  <div>
    <p>
      {selectedOption === questions[currentQuestionIndex].answer ? (
        <div>
          <div>Correct!</div>
          <div>{questions[currentQuestionIndex].explanation}</div>
        </div>
      ) : (
        `Wrong. The correct answer is ${questions[currentQuestionIndex].answer}.`
      )}
    </p>
    {showNextButton && <button onClick={handleNextButtonClick}>Next</button>}
  </div>
)}

        </div>
      )}
    </div>
  );
};

export default PracticeExam;
