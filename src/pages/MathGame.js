import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MathGame() {
  const { level } = useParams();

  const [firstNumber, setFirstNumber] = useState(0);

  const [secondNumber, setSecondNumber] = useState(0);

  const [sequence, setSequence] = useState("");

  const [guessedNumber, setGuessedNumber] = useState(0);

  const [correctNumber, setCorrectNumber] = useState(0);

  const [isCorrect, setIsCorrect] = useState(false);

  const [numberGuesses, setNumberGuesses] = useState(0);

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [maxGuesses, setMaxGuesse] = useState(5);

  const [operator, setOperator] = useState(0);

  let firstNumberRandom = 0;
  let secondNumberRandom = 0;

  const restartGame = () => {
    firstNumberRandom = Math.floor(Math.random() * 50) + 1; //creez primu nr random

    secondNumberRandom = Math.floor(Math.random() * firstNumberRandom) + 1; // creez al doilea nr random

    const randomOperation = Math.floor(Math.random() * 2);
    let seq;
    if (randomOperation === 0) {
      seq = firstNumberRandom + secondNumberRandom;
      setCorrectNumber(secondNumberRandom);
      setOperator("addition");
    } else {
      seq = firstNumberRandom - secondNumberRandom;
      setCorrectNumber(firstNumberRandom);
      setOperator("substraction");
    }

    setFirstNumber(firstNumberRandom);
    setSecondNumber(secondNumberRandom);

    setSequence(seq);
    setCorrectNumber(secondNumberRandom);
    setIsCorrect(false);
    setButtonDisabled(true);
    setNumberGuesses(0);
    setGuessedNumber("");
  };

  const onChange = (event) => {
    event.preventDefault();

    const newNumber = parseInt(event.target.value, 10);

    if (event.target.value === '') {
        setGuessedNumber('');
        return;
    }

    if (!Number.isInteger(newNumber)) {
        console.log("sdas")
      return;
    }

    setGuessedNumber(newNumber);
  };

  const guessedNumberChangeHandler = (event) => {
    event.preventDefault();

    setIsCorrect(guessedNumber === correctNumber);
    setNumberGuesses(numberGuesses + 1);
  };

  useEffect(() => {
    restartGame();
  }, []);

  useEffect(() => {
    setButtonDisabled(numberGuesses !== maxGuesses);
  }, [numberGuesses]);

  useEffect(() => {
    setButtonDisabled(!isCorrect);
  }, [isCorrect]);

  return (
    <div>
      <p>LEVEL: {level}</p>
      {correctNumber}
      <h1>Resolve this simple ecuation!</h1>
      <div>
        {firstNumber &&
          secondNumber &&
          operator === "addition" && ( //checks if they have been set before displaying their values.
            <>
              {firstNumber} +{" "}
              <span>
                <input
                  value={guessedNumber}
                  onChange={onChange}
                  style={{width:15}}
                  disabled={isCorrect || numberGuesses === maxGuesses}
                ></input>
              </span>{" "}
              = {sequence};
            </>
          )}
        {firstNumber &&
          secondNumber &&
          operator === "substraction" && ( //checks if they have been set before displaying their values.
            <>
              {firstNumber} - <span>
                <input
                  value={guessedNumber}
                  onChange={onChange}
                  style={{width:15}}
                  disabled={isCorrect || numberGuesses === maxGuesses}
                ></input>
              </span>{" "} = {sequence};
            </>
          )}
      </div>
      <button onClick={guessedNumberChangeHandler}>OK</button>
      {isCorrect ? (
        <p> You guessed correctly!</p>
      ) : (
        <p> keep guessing, number of guesses {parseInt(numberGuesses)}</p>
      )}
      <button onClick={restartGame} disabled={buttonDisabled}>
        Next Round
      </button>
    </div>
  );
}

export default MathGame;
