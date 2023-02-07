import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses, answer }) {
  const numRows = range(0, NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {numRows.map((rowIndex) => (
        <Guess
          key={rowIndex}
          value={guesses[rowIndex] ? guesses[rowIndex].word : ""}
          answer={answer}
        />
      ))}
    </div>
  );
}

export default GuessResults;
