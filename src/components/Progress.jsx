function Progress({ index, questionsNum, points, maxResult, answer }) {
  return (
    <header className="progress">
      <progress
        max={questionsNum}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong> / {questionsNum}
      </p>
      <p>
        <strong>{points}</strong> / {maxResult}
      </p>
    </header>
  );
}

export default Progress;
