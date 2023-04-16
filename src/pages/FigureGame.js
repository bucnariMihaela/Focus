import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./FigureGame.css";

function FigureGame() {
  const figures = [
    {
      feeling: "LINIȘTIT",
      image: "/GamesCategoryImages/FigureGame/facesEmotions/calm.png",
    },
    {
      feeling: "FURIOS",
      image: "/GamesCategoryImages/FigureGame/facesEmotions/angry.png",
    },
    {
      feeling: "SOMNOROS",
      image: "/GamesCategoryImages/FigureGame/facesEmotions/sleepy.png",
    },
    {
      feeling: "TRIST",
      image: "/GamesCategoryImages/FigureGame/facesEmotions/sad.png",
    },
    {
      feeling: "FERICIT",
      image: "/GamesCategoryImages/FigureGame/facesEmotions/happy.png",
    },
    {
      feeling: "ÎNGRIJORAT",
      image: "/GamesCategoryImages/FigureGame/facesEmotions/worried.png",
    },
    {
      feeling: "RĂNIT",
      image: "/GamesCategoryImages/FigureGame/facesEmotions/hurt.png",
    },
    {
      feeling: "OBOSIT",
      image: "/GamesCategoryImages/FigureGame/facesEmotions/tired.png",
    },
    {
      feeling: "FRICOS",
      image: "/GamesCategoryImages/FigureGame/facesEmotions/afraid.png",
    },
    {
      feeling: "UIMIT",
      image: "/GamesCategoryImages/FigureGame/facesEmotions/shocked.png",
    },
  ];

  const { level } = useParams();

  const [correctFeeling, setCorrectFeeling] = useState("");

  const [buttonsColor, setButtonsColor] = useState("rgb(56, 160, 224)");

  const [opt, setOptions] = useState([]);

  const [isCorrect, setIsCorrect] = useState(false);

  const [guessedFeeling, setGuessedFeeling] = useState("");

  const [displayedImage, setDisplayedImage] = useState("");

  const [scrambeldFeeling, setScrambeldFeeling] = useState("");

  const [showDiv1, setShowDivLevel1] = useState(false);

  const [showDiv2, setShowDivLevel2] = useState(false);


  const restartGame = () => {
    let randomFigure = "";
    let randomFeeling = "";
    let feelings = [];
    let options = [];
    let scrambledFeeling = "";

    feelings = [...figures.map((figure) => figure.feeling)]; // iau toate feelingurile
    randomFigure = figures[Math.floor(Math.random() * figures.length)]; //iau o figura random

    randomFeeling = randomFigure.feeling; //iau din figura random si feelingul
    if (level === "1") {
      const index = feelings.indexOf(randomFeeling); // returneaza indexu unde a gasit feelingul corect sau -1 daca nu l-a gasit
      if (index > -1) {
        feelings.splice(index, 1); // elimina elemntul de la indexul unde e randomFeeling
      }

      let randomFeelings = feelings.sort(() => Math.random() - 0.5).slice(0, 2); // iau 2 feelings random

      options = [...randomFeelings, randomFeeling].sort(
        () => Math.random() - 0.5
      ); // combin feelingu corect cu cele doua random

      setShowDivLevel1(true)
    } else {
      scrambledFeeling = randomFeeling
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      setScrambeldFeeling(scrambledFeeling.toUpperCase());
      setShowDivLevel2(true);
    }
    setCorrectFeeling(randomFeeling);
    setDisplayedImage(randomFigure.image);
    setOptions([...options]);
    setGuessedFeeling("");
    setIsCorrect(false);
  };

  useEffect(() => {
    restartGame();
  }, []);

  const buttonClickHandler = (option) => {
    setGuessedFeeling(option);
    setIsCorrect(option === correctFeeling);
    setButtonsColor(option === correctFeeling ? "green" : "red");
  };

  const getButtonColor = (option) => {
    if (guessedFeeling === "") {
      //verifcam daca s-o apasat vreun buton pana in momentul actual
      return "rgb(56, 160, 224)";
    } else if (option === correctFeeling) {
      //verifcam daca s-o apasat butonul, daca optiunea pe care am apasat e cea corecta returneaza verde
      return guessedFeeling === option ? "green" : "rgb(56, 160, 224)";
    } else {
      return guessedFeeling === option ? "red" : "rgb(56, 160, 224)"; // daca optiunea pe care am apasat nu ii cea corecta returneazaa rosu
    }
  };

  const onChange = (event) => {
    const word = event.target.value;
    console.log("litera");
    if (word.toUpperCase() === correctFeeling) {
      console.log("merge");
      setIsCorrect(true);
    }
    setGuessedFeeling(word);
  };

  return (
    <div className="container-figure">
      <h1>NIVEL: {level}</h1>
      <h1>Care este starea persoanei? </h1>

      {showDiv1 && 
      <div className="figureGame-level1">
        <h1>Alege varianta corectă!</h1>
        <img src={displayedImage} alt="figure" width="300" height="250" />
        <div className="buttons">
          {opt.map((option, index) => (
            <button
              hidden={
                guessedFeeling !== "" && isCorrect && correctFeeling !== option
              }
              className="figure-button"
              key={index}
              onClick={() => buttonClickHandler(option)}
              style={{ backgroundColor: getButtonColor(option) }}
            >
              {option}
            </button>
          ))}
          {guessedFeeling === correctFeeling && <h1> Ai ghicit corect! </h1>}
        </div>
      </div>
}

    {showDiv2 &&
      <div className="figureGame-level2">
        <img src={displayedImage} alt="figure" width="300" height="250" />
        <h1>Aranjeză cuvântul: {scrambeldFeeling}</h1>
        <input
          type="text"
          value={guessedFeeling}
          onChange={onChange}
          disabled={isCorrect}
        ></input>
      </div>
}
      <button className="next-button" onClick={restartGame}>
        URMĂTORUL
      </button>
    </div>
  );
}

export default FigureGame;
