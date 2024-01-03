function FinishScreen({ points, maxResult, highscore, dispatch }) {
  let percentage = (points / maxResult) * 100;
  let emoji;
  if (percentage === 100) emoji = "🏆";
  if (percentage < 100 && percentage >= 80) emoji = "🎉";
  if (percentage < 80 && percentage >= 50) emoji = "🙄";
  if (percentage < 50 && percentage > 0) emoji = "😤";
  if (percentage === 0) emoji = "❌";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxResult} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">( Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
