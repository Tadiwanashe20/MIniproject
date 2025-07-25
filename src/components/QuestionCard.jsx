// src/components/QuestionCard.jsx
import { useState } from "react";
import "./Quiz.css";

export default function QuestionCard({ question, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const handleClick = (option) => {
    if (disabled || !question.correct) return;

    setSelected(option);
    setDisabled(true);

    const isCorrect =
      option.trim().toLowerCase() === question.correct.trim().toLowerCase();

    // ✅ Advance to next question immediately
    onAnswer(isCorrect);

    // ⏳ Keep visual feedback for 1 second
    setTimeout(() => {
      setSelected(null);
      setDisabled(false);
    }, 1000);
  };

  return (
  <div className="quiz-container">
    <h3 className="quiz-question">{question.text}</h3>

    {question.image && (
      <div className="quiz-image-wrapper">
        <img src={question.image} alt="question visual" className="quiz-image" />
      </div>
    )}

    <div className="quiz-options">
      {question.options.map((option, i) => {
        let className = "quiz-option";

        if (selected && question.correct) {
          const normalizedOption = option.trim().toLowerCase();
          const normalizedCorrect = question.correct.trim().toLowerCase();

          if (normalizedOption === normalizedCorrect) {
            className += " correct";
          } else if (selected.trim().toLowerCase() === normalizedOption) {
            className += " wrong";
          }
        }

        return (
          <button
            key={i}
            className={className}
            onClick={() => handleClick(option)}
            disabled={disabled}
          >
            {option}
          </button>
        );
      })}
    </div>
  </div>
);
}
