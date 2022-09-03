import React, { useState } from "react";

const TicTacToe = () => {
  const [turn, setTurn] = useState("x");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();

  const checkForWinner = (square) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [2, 4, 6],
        [0, 4, 8],
      ],
    };

    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (square[pattern[0]] === "" || square[pattern[1]] === "" || square[pattern[2]] === "") {
        } else if (square[pattern[0]] === square[pattern[1]] && square[pattern[1]] === square[pattern[2]]) {
          setWinner(square[pattern[0]]);
        }
      });
    }
  };

  const handleRestart = () => {
    setWinner(null);
    setCells(Array(9).fill(""));
  };

  const handleClick = (num) => {
    if (cells[num] !== "") {
      alert("already clicked");
      return;
    }

    let square = [...cells];
    if (turn === "x") {
      square[num] = "x";
      setTurn("o");
    } else {
      square[num] = "o";
      setTurn("x");
    }
    checkForWinner(square);
    setCells(square);
  };

  const Cell = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
  };
  return (
    <div className="TicTacToe">
      <table>
        Turn {turn}
        <tbody>
          <tr>
            <Cell num={0}></Cell>
            <Cell num={1}></Cell>
            <Cell num={2}></Cell>
          </tr>
          <tr>
            <Cell num={3}></Cell>
            <Cell num={4}></Cell>
            <Cell num={5}></Cell>
          </tr>
          <tr>
            <Cell num={6}></Cell>
            <Cell num={7}></Cell>
            <Cell num={8}></Cell>
          </tr>
        </tbody>
      </table>
      {winner && (
        <>
          <p>{winner} is the Winner</p>
          <button onClick={() => handleRestart()}>Play Again</button>
        </>
      )}
    </div>
  );
};

export default TicTacToe;
