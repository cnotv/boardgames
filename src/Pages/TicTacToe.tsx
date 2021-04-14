import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const Squares = Array.from(Array(9).keys());
const Wins = [
  "0,1,2",
  "3,4,5",
  "6,7,8",
  "0,3,6",
  "1,4,7",
  "2,5,8",
  "0,4,8",
  "2,4,6"
];

const TicTacToe = () => {
  const [player, setPlayer] = useState("X");
  const [moves, setMoves] = useState({});
  const [victory, setVictory] = useState(false);

  const setMove = (n, player) => {
    if (!victory && !moves[n]) {
      moves[n] = player;

      const playerMoves = Object.keys(moves)
        .filter(i => moves[i] === player)
        .join();

      const result = !!Wins.filter(win => playerMoves.includes(win)).length;
      setVictory(result);

      if (!result) {
        setPlayer(player === "X" ? "O" : "X");
      }
    }
  };

  const handleReset = () => {
    setMoves({});
    setVictory(false);
  };

  return (
    <div>
      <Navbar />
      <h2>Tic Tac Toe</h2>
      <div className="ttt-squares">
        {Squares.map(n => (
          <div className="ttt-squares__item" onClick={() => setMove(n, player)}>
            {moves[n]}
          </div>
        ))}
      </div>
      <p>{victory ? `🎉🎉 ${player} won! 🎉🎉` : `Player ${player} turn`}</p>
      {victory ? <p onClick={() => handleReset()}>New game? ↺</p> : ""}
    </div>
  );
};

export default TicTacToe;
