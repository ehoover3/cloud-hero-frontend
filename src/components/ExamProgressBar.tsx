type Props = {
    children?: React.ReactNode;
}

const ExamProgressBar = ( { children } : Props) => {
    return (
        <div>
          <span>Exam Progress</span>
          <div>
            <span>% Complete</span>
          </div>
        </div>
      )
}

export default ExamProgressBar;