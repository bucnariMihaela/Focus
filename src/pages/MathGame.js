import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MathGame() {
  const { level } = useParams();

  const [firstNumber, setFirstNumber] = useState();

  const [secondNumber, setSecondNumber] = useState();

  const [sequence, setSequence] = useState();

  let firstNumberRandom = 0;
  let secondNumberRandom = 0;
  let seq = 0;

  const restartGame = () => {
    firstNumberRandom = Math.floor(Math.random() * 50) + 1;
    secondNumberRandom = Math.floor(Math.random() * 50) + 1;

    setFirstNumber(firstNumberRandom);
    setSecondNumber(secondNumberRandom);

    const seq = firstNumberRandom + secondNumberRandom;

    setSequence(seq);
  };

  useEffect(() => {
    restartGame();
  }, []);

  return (
    <div>
      <p>LEVEL: {level}</p>
      <h1>Resolve this simple ecuation!</h1>
      <input type="text" ></input>
      <div>
        {firstNumber && secondNumber && ( //checks if they have been set before displaying their values.
          <>
            {firstNumber} + {secondNumber} = {sequence};
          </>
        )}
      </div>
    </div>
  );
}

export default MathGame;
