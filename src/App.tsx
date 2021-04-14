import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Dots from "./Pages/Dots";
import TicTacToe from "./Pages/TicTacToe";
import Battleship from "./Pages/Battleship";
import Pictionary from "./Pages/Pictionary";
import JoinFive from "./Pages/JoinFive";
import Go from "./Pages/Go";
import Gomoku from "./Pages/Gomoku";

const Routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/Dots",
    component: Dots
  },
  {
    path: "/tic-tac-toe",
    component: TicTacToe
  },
  {
    path: "/battleship",
    component: Battleship
  },
  {
    path: "/pictionary",
    component: Pictionary
  },
  {
    path: "/join-five",
    component: JoinFive
  },
  {
    path: "/go",
    component: Go
  },
  {
    path: "/gomoku",
    component: Gomoku
  }
];

export default function App() {
  return (
    <Router>
      <Switch>
        {Routes.map((route, i) => (
          <Route path={route.path} exact component={route.component} key={i} />
        ))}
      </Switch>
    </Router>
  );
}
