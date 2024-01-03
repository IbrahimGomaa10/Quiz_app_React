function Options({ question, answer, dispatch }) {
  const checkAnswer = answer !== null;
  return (
    <div>
      <h3>{question.question}</h3>
      <div className="options">
        {question.options.map((option, indx) => (
          <button
            className={`btn btn-option ${answer === indx ? "answer" : ""} ${
              checkAnswer
                ? indx === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={option}
            disabled={checkAnswer}
            onClick={() => dispatch({ type: "newAnswer", payload: indx })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Options;
