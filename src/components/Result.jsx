import React from "react";

const Result = ({ score, total }) => {
  const percentage = Math.round((score / total) * 100);

  return (
    <div style={{ background: "#111", color: "#fff", padding: "2rem", borderRadius: "10px" }}>
      <h2>Quiz Finished!</h2>
      <p>Your score: {score} out of {total}</p>
      <p>Accuracy: {percentage}%</p>
      <button onClick={() => window.location.reload()} style={{
        marginTop: "1rem",
        padding: "0.5rem 1rem",
        background: "#ffd700",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}>
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;
