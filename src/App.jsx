import React from "react";
import Quiz from "./components/Quiz";

function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#222",
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "2rem"
    }}>
      <Quiz />
    </div>
  );
}

export default App;
