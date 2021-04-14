import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Home = () => (
  <div>
    <p>
      <Link to="/tic-tac-toe">Tic Tac Toe ⇁</Link>
    </p>
    <p>
      <Link to="/dots">Dots and boxes ⇁</Link>
    </p>
    <p>
      <Link to="/battleship">Battleship ⇁</Link>
    </p>
    <p>
      <Link to="/pictionary">Pictionary ⇁</Link>
    </p>
    <p>
      <Link to="/join-five">Join 5 ⇁</Link>
    </p>
    <p>
      <Link to="/go">Go ⇁</Link>
    </p>
    <p>
      <Link to="/gomoku">Gomoku ⇁</Link>
    </p>
  </div>
);

export default Home;
