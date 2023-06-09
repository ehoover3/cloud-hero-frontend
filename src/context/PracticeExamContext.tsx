import { createContext, useState } from "react";
import { Question } from "../models/QuestionType";

type PracticeExamContextType = {
    missedQuestions: Question[],
    score: number,
    showNextButton: boolean,
    showResult: boolean,
    setMissedQuestions: React.Dispatch<React.SetStateAction<Question[]>>,
    setScore: (newScore: number) => void,
    updateMissedQuestions: (value: Question) => void,
    setShowNextButton: (value: React.SetStateAction<boolean>) => void,
    setShowResult: (value: React.SetStateAction<boolean>) => void,
}


const PracticeExamContext = createContext<PracticeExamContextType>({
    missedQuestions: [],
    score: 0,
    showNextButton: false,
    showResult: false,
    setMissedQuestions: () => ([]),
    setScore: (newScore: number) => {console.log(newScore)},
    updateMissedQuestions: (value: Question) => {console.log(value)},
    setShowNextButton: (value: React.SetStateAction<boolean>) => {console.log(value)},
    setShowResult: (value: React.SetStateAction<boolean>) => {console.log(value)},
});

type Props = {
    children?: React.ReactNode;
}
function PraciceExamProvider({ children }: Props){
    const [missedQuestions, setMissedQuestions] = useState<Question[]>([]);
    const [score, setScore] = useState(0);
    const [showNextButton, setShowNextButton] = useState(false);
    const [showResult, setShowResult] = useState(false);
    

    //Need current question number 
    //1. Add number argument and add currentQuestion as a prop
    //2. Add Question arg and change missedQuestions to QuestionArray
    const updateMissedQuestions = (missedQuestion: Question) => {
        setMissedQuestions([...missedQuestions, missedQuestion])
    }

    const valueToShare = {
        missedQuestions,
        score,
        showNextButton,
        showResult,
        setMissedQuestions,
        setScore,
        updateMissedQuestions,
        setShowNextButton,
        setShowResult
    }
    return (
        <PracticeExamContext.Provider value={valueToShare}>
            {children}
        </PracticeExamContext.Provider>
    )
}

export {PraciceExamProvider};
export default PracticeExamContext;
