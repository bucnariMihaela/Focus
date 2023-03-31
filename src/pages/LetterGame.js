import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function LetterGame() {
  const words = [
    [
      { animal: "iepure", image: "/GamesCategoryImages/bunny.png" },
      { animal: "găină", image: "/GamesCategoryImages/chicken.png" },
      { animal: "pisică", image: "/GamesCategoryImages/cat.png" },
      { animal: "câine", image: "/GamesCategoryImages/dog.png" },
      { animal: "oaie", image: "/GamesCategoryImages/sheep.png" },
      { animal: "vacă", image: "/GamesCategoryImages/cow.png" },
      { animal: "porc", image: "/GamesCategoryImages/pig.png" },
      { animal: "cal", image: "/GamesCategoryImages/horse.png" },
      { animal: "rață", image: "/GamesCategoryImages/duck.png" },
      { animal: "taur", image: "/GamesCategoryImages/bull.png" },
    ],
    [{ animal: "elefant" },
    { animal: "rino" },
    { animal: "cal" },

  ],
  ];

  const { level } = useParams();

  const [displayedWords, setDisplayedWords] = useState("");
  const [displayedImage, setDisplayedImage] = useState("");

  const [guessedLetter, setGuessedLetter] = useState("");

  const [correctLetter, setCorrectLetter] = useState("");

  const [isCorrect, setIsCorrect] = useState(false);

  const [numberGuesses, setNumberGuesses] = useState(0);

  const [maxGuesses, setMaxGuesse] = useState(2);

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const restartGame = () => {

    let random = "";
    let randomWord = "";
    
    if (level === "1") {
      random = words[0][Math.floor(Math.random() * words[0].length)];
    } else {
      random = words[1][Math.floor(Math.random() * words[1].length)];
    }

    randomWord = random.animal;

    const randomLetterIndex = Math.floor(
      Math.random() * (randomWord.length - 2) + 1
    );

    const wordWithoutLetter =
      randomWord.substring(0, randomLetterIndex) +
      "_" +
      randomWord.substring(randomLetterIndex + 1, randomWord.length);

    setDisplayedWords(wordWithoutLetter);
    setCorrectLetter(randomWord[randomLetterIndex]);
    setDisplayedImage(random.image);
    setGuessedLetter("");
    setIsCorrect(false);
    setNumberGuesses(0);
    setButtonDisabled(true);
  };

  useEffect(() => {
    restartGame();
  }, []);

  const guesedLetterChangeHandler = (event) => {
    event.preventDefault();
    //is called whenever the user enters a new letter into the field.
    const newLetter = event.target.value;
    if (newLetter.length > 1) {
      // verific daca lungimea ii mai mare ca 1, insemnand ca am adaugat mai mult de 1 litera
      return;
    }

    setGuessedLetter(newLetter); // updates guessedLetter and retrives the new letter

    if (newLetter === "") {
      return;
    }

    setIsCorrect(newLetter === correctLetter);
    setNumberGuesses(numberGuesses + 1);
  };

  useEffect(() => {
    setButtonDisabled(numberGuesses !== maxGuesses);
  }, [numberGuesses]);

  useEffect(() => {
    setButtonDisabled(!isCorrect);
  }, [isCorrect]);

  return (
    <div>
      <p>LEVEL: {level}</p>
      <h1>{displayedWords}</h1>
      <input
        type="text"
        value={guessedLetter}
        onChange={guesedLetterChangeHandler}
        disabled={isCorrect || numberGuesses === maxGuesses} // dupa ||  // we check if the number of guesses made so far is greater or equal to maxguesses, and if so we disable the input field using disabled attribute
      ></input>

      <p> Your guess is: {guessedLetter}</p>
      <img src={displayedImage} alt="bunny" width="300px" height="350px" />
      {isCorrect ? (
        <p> You guessed correctly!</p>
      ) : (
        <p>
          {" "}
          You made {numberGuesses} guesses out of {maxGuesses}.
        </p>
      )}
      <button onClick={restartGame} disabled={buttonDisabled}>
        Next Round
      </button>
    </div>
  );
}

export default LetterGame;
