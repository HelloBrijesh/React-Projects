import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./projects/Home";
import TicTacToe from "./projects/TicTacToe/TicTacToe";
import ImageGallery from "./projects/ImageGallery/ImageGallery";
import Quiz from "./projects/Quiz/Quiz";
import Crypto from "./projects/Crypto/Crypto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/image-gallery" element={<ImageGallery />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/crypto" element={<Crypto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
