import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/tictactoe">TicTacToe</Link>
      <Link to="/image-gallery">Image Gallery</Link>
      <Link to="/quiz">Quiz</Link>
      <Link to="/crypto">Crypto</Link>
    </div>
  );
}

export default Home;
