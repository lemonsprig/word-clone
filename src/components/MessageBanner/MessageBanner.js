import React from "react";

function MessageBanner({ gameStatus, numberOfGuesses, answer }) {
  if (gameStatus === "won") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{numberOfGuesses} guesses</strong>.
        </p>
      </div>
    );
  } else if (gameStatus === "lost") {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }

  return <div>hello</div>;
}

export default MessageBanner;
