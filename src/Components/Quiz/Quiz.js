import React, { useEffect, useState } from 'react';
import { addElementRandomly } from '../../Helper/Helper';
import Question from '../Question/Question';

function Quiz({ subject }) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [questionTracker, setQuestionTracker] = useState(0);

  const nextQuestionChangeHandler = (arr) => {
    if (questionTracker < arr.length - 1) {
      console.log('change');
      setQuestionTracker((prevState) => prevState + 1);
    } else {
      alert('result will be shown');
    }
  };

  const prevQuestionChangeHandler = (arr) => {
    if (questionTracker > 0 && questionTracker < arr.length) {
      setQuestionTracker((prevState) => prevState - 1);
    } else {
      alert('no question available');
    }
  };

  useEffect(() => {
    let isMounted = true; // Flag to track component mount status

    const fetchQuizData = async () => {
      try {
        const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${subject}&difficulty=medium&type=multiple`);
        const data = await response.json();

        if (isMounted) {
          const modifiedData = [...data.results].map((item) => {
            const addOneOption = item.correct_answer;
            return { ...item, incorrect_answers: addElementRandomly([...item.incorrect_answers], addOneOption) };
          });
          console.log(modifiedData, data.results, modifiedData === data.results);
          setQuestions(modifiedData);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    if (isMounted) {
      fetchQuizData();
    }

    return () => {
      isMounted = false; // Cleanup to mark component as unmounted
    };
  }, [subject]);

  if (loading) {
    return <>Loading...</>;
  } else {
    return (
      <>
        {questions.length > 0 && <Question allQuestions={questions} index={questionTracker} />}

        <button onClick={() => nextQuestionChangeHandler(questions)}>next question</button>
        {questionTracker > 0 && <button onClick={() => prevQuestionChangeHandler(questions)}>back</button>}
      </>
    );
  }
}

export default Quiz;
