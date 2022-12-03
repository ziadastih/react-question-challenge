import React, { useState } from "react";
import Question from "./components/Question";
import questionsArr from "./questionsData";

function App() {
  const [question, setQuestions] = useState(questionsArr);

  const toggleQuestion = (index) => {
    setQuestions((prevQuestion) => {
      const newQuestion = prevQuestion.map((question) => {
        return question.id === index
          ? { ...question, toggle: !question.toggle }
          : { ...question, toggle: false };
      });
      return newQuestion;
    });
  };

  const questions = question.map((question, index) => {
    return (
      <Question
        key={question.id}
        toggle={question.toggle}
        question={question}
        toggleQuestion={() => toggleQuestion(index)}
      />
    );
  });

  return (
    <section className="questions">
      <div className="title">
        <h2>general questions</h2>
      </div>

      <div className="section-center">{questions}</div>
    </section>
  );
}

export default App;
