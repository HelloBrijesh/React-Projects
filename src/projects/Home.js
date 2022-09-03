import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div class="Home">
      <div class="project-list">
        <Link to="/tictactoe">TicTacToe</Link>
      </div>
      <div class="project-list">
        <Link to="/image-gallery">Image Gallery</Link>
      </div>
      <div class="project-list">
        <Link to="/quiz">Quiz</Link>
      </div>
      <div class="project-list">
        <Link to="/crypto">Crypto</Link>
      </div>
    </div>
  );
}

export default Home;
