import React from 'react';
import Form from 'react-bootstrap/Form';

function Question({ allQuestions, index }) {
  const selectedQuestion = allQuestions.filter((item, itemIndex) => itemIndex === index && item);

  const SelectedQuestionTitleStructure = selectedQuestion.map((item) => {
    const { question, category } = item;
    return <h1 key={category}>{question}</h1>;
  });

  const selectedQuestionOptions = selectedQuestion[0].incorrect_answers.map((option, index) => {
    return (
      <>
        <Form.Check type='radio' key={`${option}-${index}`} name='group1' label={option} />
      </>
    );
  });

  console.log(selectedQuestion);
  return (
    <>
      {SelectedQuestionTitleStructure}
      {selectedQuestionOptions}
    </>
  );
}

export default Question;
