const Question = (props) => {
  return (
    <article
      className={props.question.toggle ? "question show-text" : "question"}
    >
      <div className="question-title">
        <p>{props.question.question}</p>

        <button
          type="button"
          className="question-btn"
          onClick={props.toggleQuestion}
        >
          <span className="plus-icon">
            <i className="far fa-plus-square"></i>
          </span>
          <span className="minus-icon">
            <i className="far fa-minus-square"></i>
          </span>
        </button>
      </div>

      <div className="question-text">
        <p>{props.question.text}</p>
      </div>
    </article>
  );
};

export default Question;
