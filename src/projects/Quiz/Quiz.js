import "../../App.css";
import React, { useState, useContext } from "react";
import MainMenu from "./MainMenu";
import Quiz1 from "./Quiz1";
import EndScreen from "./EndScreen";
import { QuizContext } from "./Context";

function Quiz() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz1 />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}
export default Quiz;
