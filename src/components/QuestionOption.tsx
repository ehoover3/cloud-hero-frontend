type Props = {
  option: string,
  handleSelectOption: (optionString:string) => void;
}

  const QuestionOption = ({option, handleSelectOption}: Props) => {
    const handleOnClick = () => {
      handleSelectOption(option);
    }

    return (
      <div>
        <p onClick={handleOnClick}>{option}</p>
      </div>
    )
  };
  
  export default QuestionOption;