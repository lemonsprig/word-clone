import React from "react";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import MessageBanner from "../MessageBanner";
import Keyboard from "../Keyboard/Keyboard";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const [gameStatus, setGameStatus] = React.useState("running");

  function handleAddGuess(guess) {
    const newGuess = {
      word: guess,
      id: crypto.randomUUID(),
    };

    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setGameStatus("won");
    } else if (
      guess !== answer &&
      guesses.length >= NUM_OF_GUESSES_ALLOWED - 1
    ) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      {/* <Keyboard /> */}
      <GuessInput disabled handleAddGuess={handleAddGuess} />
      {gameStatus !== "running" && (
        <MessageBanner
          gameStatus={gameStatus}
          numberOfGuesses={guesses.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
