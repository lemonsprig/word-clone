import React from "react";
import { range } from "../../utils";

function GuessInput({ handleAddGuess }) {
  const [guess, setGuess] = React.useState("");

  function handleChange(event) {
    setGuess(event.target.value.toUpperCase());
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleAddGuess(guess);
    console.log(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        pattern="[A-Za-z]{5}"
        title="wotcha"
        maxLength="5"
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleChange}
      />
    </form>
  );
}

export default GuessInput;
