import React, { useState, useEffect } from "react";
import questions from "../data/questions.json";
import Result from "./Result";

// Shuffle and select 10 random questions
const quizQuestions = [...questions]
  .sort(() => 0.5 - Math.random())
  .slice(0, 10);

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20);

  const q = quizQuestions[current];

  // Timer countdown
  useEffect(() => {
    if (timeLeft === 0) {
      skipQuestion();
      return;
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  // Reset timer when question changes
  useEffect(() => {
    setTimeLeft(20);
  }, [current]);

  const handleAnswer = (selected) => {
    if (selected === q.answer) {
      setScore(score + 1);
    }
    goToNext();
  };

  const skipQuestion = () => {
    goToNext();
  };

  const goToNext = () => {
    if (current + 1 < quizQuestions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const quitQuiz = () => {
    const confirmQuit = window.confirm("Are you sure you want to quit the quiz?");
    if (confirmQuit) {
      setFinished(true);
    }
  };

  if (finished) {
    return <Result score={score} total={quizQuestions.length} />;
  }

  return (
    <div style={{ background: "#111", color: "#fff", padding: "1.5rem", borderRadius: "8px" }}>
      <h2>Question {current + 1} of {quizQuestions.length}</h2>
      <p>{q.question}</p>
      {q.image && <img src={`/${q.image}`} alt="Sign" style={{ width: "120px", marginBottom: "1rem" }} />}
      
      <div style={{
        fontWeight: "bold",
        color: timeLeft <= 5 ? "red" : "#fff",
        marginBottom: "1rem"
      }}>
        Time Left: {timeLeft}s
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {q.options.map((opt, idx) => (
          <li key={idx} style={{ marginBottom: "0.75rem" }}>
            <button
              onClick={() => handleAnswer(opt)}
              style={{
                padding: "0.5rem 1rem",
                border: "none",
                borderRadius: "5px",
                background: "#ffd700",
                color: "#000",
                cursor: "pointer"
              }}
            >
              {opt}
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={quitQuiz}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          background: "#cc0000",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Quit Quiz
      </button>
    </div>
  );
};

export default Quiz;
