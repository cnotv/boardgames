import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const Columns = Array.from(Array(5).keys());
const Rows = Array.from(Array(5).keys());

const Dots = () => {
  const [player, setPlayer] = useState("X");
  const [moves, setMoves] = useState({});

  const setMove = () => {};

  return (
    <div>
      <Navbar />
      <h2>Dots and boxes</h2>

      <div className="dots">
        {Rows.map(n => (
          <div className="dots__col">
            {Columns.map(n => (
              <div className="dots__row">
                <div className="dots__dot" />
                <div className="dots__h" />
                <div className="dots__v" />
                <div className="dots__box" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dots;
