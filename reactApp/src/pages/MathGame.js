import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./MathGame.css";

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

  const [maxGuesses, setMaxGuesses] = useState(5);

  const [operator, setOperator] = useState(0);

  let firstNumberRandom = 0;
  let secondNumberRandom = 0;

  const navigate = useNavigate();

  const restartGame = () => {
    firstNumberRandom = Math.floor(Math.random() * 10) + 1; //creez primu nr random

    secondNumberRandom = Math.floor(Math.random() * firstNumberRandom) + 1; // creez al doilea nr random

    let seq;
    if (level === "1") {
      const randomOperation = Math.floor(Math.random() * 2);
      if (randomOperation === 0) {
        seq = firstNumberRandom + secondNumberRandom;
        setCorrectNumber(secondNumberRandom);
        setOperator("addition");
      } else if (randomOperation === 1) {
        seq = firstNumberRandom - secondNumberRandom;
        setCorrectNumber(firstNumberRandom);
        setOperator("substraction");
      }
    } else {
      seq = firstNumberRandom * secondNumberRandom;
      setCorrectNumber(secondNumberRandom);
      setOperator("multiplication");
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

    if (event.target.value === "") {
      setGuessedNumber("");
      return;
    }

    if (!Number.isInteger(newNumber)) {
      return;
    }

    setGuessedNumber(newNumber);
    setMaxGuesses(5);
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

  const onClick = () => {
    navigate("/");
  };

  return (
    <div className="containerMath">
      <h1>NIVEL: {level}</h1>
      <h1>Rezolvă această ecuație!</h1>
      <div id="idMath">
        <div style={{ fontSize: "3em", marginTop: "40px" }}>
          {firstNumber &&
          secondNumber &&
          operator === "addition" && ( //checks if they have been set before displaying their values.
              <>
                {firstNumber} +{" "}
                <span>
                  <input
                    className="inputNumber"
                    value={guessedNumber}
                    onChange={onChange}
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
                {firstNumber} -{" "}
                <span>
                  <input
                    className="inputNumber"
                    value={guessedNumber}
                    onChange={onChange}
                    disabled={isCorrect || numberGuesses === maxGuesses}
                  ></input>
                </span>{" "}
                = {sequence}
              </>
            )}
          {firstNumber &&
          secondNumber &&
          operator === "multiplication" && ( //checks if they have been set before displaying their values.
              <>
                {firstNumber} *{" "}
                <span>
                  <input
                    className="inputNumber"
                    value={guessedNumber}
                    onChange={onChange}
                    style={{ width: 15 }}
                    disabled={isCorrect || numberGuesses === maxGuesses}
                  ></input>
                </span>{" "}
                = {sequence}
              </>
            )}
        </div>
        <button
          className="math-button"
          onClick={guessedNumberChangeHandler}
          style={{ marginTop: "20px" }}
          disabled={isCorrect || numberGuesses === maxGuesses || !guessedNumber}
        >
          OK
        </button>
        {isCorrect ? (
          <h1>Ai ghicit corect!</h1>
        ) : (
          <h1 style={{ marginTop: "30px" }}>
            {" "}
            Ai ghicit de {parseInt(numberGuesses)} ori, din {maxGuesses} .
          </h1>
        )}
        <div id="btn">
          <button
            className="math-button"
            onClick={restartGame}
            disabled={buttonDisabled}
          >
            URMĂTORUL
          </button>
          <button className="math-button" onClick={onClick}>
            ÎNAPOI
          </button>
        </div>
      </div>
    </div>
  );
}

export default MathGame;
