import PracticeExam from "../components/PracticeExam";
import { PraciceExamProvider } from "../context/PracticeExamContext";
import { questions } from "../data/practiceTestQuestions"

const PracticeExamPage = ( ) => {
    
    return (
      <div>
        <PraciceExamProvider>
          <PracticeExam examQuestions={questions} />
        </PraciceExamProvider>
      </div>
    )
  };

export default PracticeExamPage;