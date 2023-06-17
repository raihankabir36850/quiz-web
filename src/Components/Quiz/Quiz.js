import React, { useState, useEffect } from "react";

function Quiz({ subject }) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; // Flag to track component mount status

    const fetchQuizData = async () => {
      try {
        const response = await fetch(
          `https://opentdb.com/api.php?amount=10&category=${subject}&difficulty=medium&type=multiple`
        );
        const data = await response.json();

        if (isMounted) {
          console.log(data.results);
          setQuestions(data.results);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching quiz data:", error);
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
        {questions.length > 0 &&
          questions.map((item, index) => (
            <h1 key={index}>{item.correct_answer}</h1>
          ))}
      </>
    );
  }
}

export default Quiz;
