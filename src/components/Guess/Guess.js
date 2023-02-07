import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const numCols = range(0, 5);

  const guessArray = checkGuess(value, answer);

  return (
    <p className="guess">
      {numCols.map((colIndex) => (
        <span
          key={colIndex}
          className={`cell ${guessArray ? guessArray[colIndex].status : ""}`}
        >
          {guessArray ? guessArray[colIndex].letter : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
