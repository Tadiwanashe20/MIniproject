// src/components/Quiz.jsx
import { useState, useEffect } from "react";
import questions from "../pages/questions";
import QuestionCard from "./QuestionCard";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [shuffled, setShuffled] = useState([]);

  useEffect(() => {
    const random10 = [...questions]
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);
    setShuffled(random10);
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);

    // Move to next question after slight delay
    setTimeout(() => {
      setCurrent((prev) => prev + 1);
    }, 1000);
  };

  if (shuffled.length === 0) return <p>Loading questions...</p>;

if (current >= shuffled.length) {
  return (
    <div className="quiz-result">
      <h2 className="quiz-score-title">🎉 Your Score</h2>
      <p className="quiz-score">{score} / {shuffled.length}</p>
      <button onClick={() => window.location.reload()} className="gold-button">
        Try Again
      </button>
    </div>
  );
}


  return (
    <QuestionCard question={shuffled[current]} onAnswer={handleAnswer} />
  );
}
