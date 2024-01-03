import Options from "./Options";

function Question({ question, answer, dispatch }) {
  return (
    <div>
      <Options question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}

export default Question;
