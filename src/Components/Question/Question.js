import React from "react";
import Form from "react-bootstrap/Form";

function Question({ allQuestions, index, answers }) {
  const selectedQuestion = allQuestions.filter(
    (item, itemIndex) => itemIndex === index && item
  );

  const SelectedQuestionTitleStructure = selectedQuestion.map((item) => {
    const { question, category } = item;
    return <h1 key={category}>{question}</h1>;
  });

  const selectedQuestionOptions = selectedQuestion[0].incorrect_answers.map(
    (option, index) => {
      return (
        <>
          <Form.Check
            type="radio"
            key={`${option}-${index}`}
            name="group1"
            label={option}
            value={option}
            onChange={(e) => answers(e)}
          />
        </>
      );
    }
  );

  const numberOfQuestions = `${index + 1}/${allQuestions.length}`;

  console.log(selectedQuestion);
  return (
    <>
      {SelectedQuestionTitleStructure}
      {selectedQuestionOptions}
      <p>Questons: {numberOfQuestions}</p>
    </>
  );
}

export default Question;
