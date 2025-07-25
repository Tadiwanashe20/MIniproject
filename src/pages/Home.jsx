import { Link } from "react-router-dom";
import "./Home.css";

const phrase = "DRIVING IS MADE EASY ZIMBABWE";

export default function Home() {
  const radius = 90;

  return (
    <div className="home-container">
      <div className="dimez-logo">
        {/* Desktop logo */}
        <h2 className="dimez-name desktop">DIMEZ</h2>

        <div className="circle-text-container">
          {[...phrase].map((char, i) => (
            <span
              key={i}
              className="circle-letter"
              style={{
                transform: `rotate(${i * (360 / phrase.length)}deg) translate(${radius}px) rotate(-${i * (360 / phrase.length)}deg)`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}

          {/* Mobile logo */}
          <h2 className="dimez-name mobile">DIMEZ</h2>
        </div>
      </div>

      <h1 className="home-title">DIMEZ Oral Exam App</h1>
      <p className="home-subtitle">
        Master the Zimbabwe Highway Code with AI-powered Q&A and practice quizzes.
      </p>

      <div className="home-buttons">
        <Link to="/chat">
          <button className="gold-button">Start AI Chat</button>
        </Link>
        <Link to="/practice">
          <button className="gold-button">Practice Test</button>
        </Link>
      </div>
    </div>
  );
}
