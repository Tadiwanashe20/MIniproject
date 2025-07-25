// src/pages/Practice.jsx
import { Link } from "react-router-dom";
import Quiz from "../components/Quiz";
import "./Practice.css";

export default function Practice() {
  return (
    <div className="practice-container">
      {/* ✅ Back Button */}
      <Link to="/" className="back-button">← Back</Link>

      <h2 className="practice-title">Practice Test</h2>
      <Quiz />
    </div>
  );
}
