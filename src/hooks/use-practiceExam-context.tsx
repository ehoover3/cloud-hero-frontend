import {useContext} from 'react'
import PracticeExamContext from '../context/PracticeExamContext'

function usePracticeExamContext() {
    return useContext(PracticeExamContext);
}

export default usePracticeExamContext;