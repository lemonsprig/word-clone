import React from "react";
import { KEYS } from "../../constants";

function Keyboard() {
  return (
    <div className="keyboard">
      {KEYS.map((key) => (
        <div key={key} className="key ">
          {key}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
