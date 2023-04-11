import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./FigureGame.css";

function FigureGame() {
  const figures = [
    { feeling: "LINIȘTIT", image: "/GamesCategoryImages/FigureGame/calm.png" },
    { feeling: "FURIOS", image: "/GamesCategoryImages/FigureGame/angry.png" },
    {
      feeling: "SOMNOROS",
      image: "/GamesCategoryImages/FigureGame/sleepy.png",
    },
    { feeling: "TRIST", image: "/GamesCategoryImages/FigureGame/sad.png" },
    { feeling: "FERICIT", image: "/GamesCategoryImages/FigureGame/happy.png" },
    {
      feeling: "ÎNGRIJORAT",
      image: "/GamesCategoryImages/FigureGame/worried.png",
    },
    { feeling: "RUȘINOS", image: "/GamesCategoryImages/FigureGame/shy.png" },
    { feeling: "OBOSIT", image: "/GamesCategoryImages/FigureGame/tired.png" },
    { feeling: "FRICOS", image: "/GamesCategoryImages/FigureGame/afraid.png" },
    { feeling: "UIMIT", image: "/GamesCategoryImages/FigureGame/shocked.png" },
  ];

  const { level } = useParams();

  const [correctFeeling, setCorrectFeeling] = useState("");

  const [buttonsColor, setButtonsColor] = useState("rgb(56, 160, 224)");

  const [opt, setOptions] = useState([]);

  const [isCorrect, setIsCorrect] = useState(false);

  const [guessedFeeling, setGuessedFeeling] = useState("");

  const [displayedImage, setDisplayedImage] = useState("");

  let randomFeeling = "";

  const restartGame = () => {
    let randomFigure = "";
    let randomFeeling = "";
    let feelings = [];
    let options = [];

    feelings = [...figures.map((figure) => figure.feeling)]; // iau toate feelingurile
    randomFigure = figures[Math.floor(Math.random() * figures.length)]; //iau o figura random
    randomFeeling = randomFigure.feeling; //iau din figura random si feelingul

    const index = feelings.indexOf(randomFeeling); // returneaza indexu unde a gasit feelingul corect sau -1 daca nu l-a gasit
    if (index > -1) {
      feelings.splice(index, 1); // elimina elemntul de la indexul unde e randomFeeling
    }

    let randomFeelings = feelings.sort(() => Math.random() - 0.5).slice(0, 2); // iau 2 feelings random

    options = [...randomFeelings, randomFeeling].sort(
      () => Math.random() - 0.5
    ); // combin feelingu corect cu cele doua random

    setCorrectFeeling(randomFeeling);
    setDisplayedImage(randomFigure.image);
    setOptions([...options]);
    setGuessedFeeling("")
  };

  useEffect(() => {
    restartGame();
  }, []);

  const buttonClickHandler = (option) => {
    setGuessedFeeling(option);
    setIsCorrect(option === correctFeeling);
    setButtonsColor(option === correctFeeling ? "green" : "red");
  };

  const getButtonColor = (option) =>{
    if (guessedFeeling === "") { //verifcam daca s-o apasat vreun buton pana in momentul actual
      return "rgb(56, 160, 224)";
    } else if (option === correctFeeling) { //verifcam daca s-o apasat butonul, daca optiunea pe care am apasat e cea corecta returneaza verde 
      return guessedFeeling === option ? "green" : "rgb(56, 160, 224)";
    } else {
      return guessedFeeling === option ? "red" : "rgb(56, 160, 224)"; // daca optiunea pe care am apasat nu ii cea corecta returneazaa rosu 
    }
  }

  return (
    <div className="container-figure">
      <h1>Care este starea persoanei? </h1>
      <h1>Alege varianta corectă!</h1>

      <img src={displayedImage} alt="figure" width="300px" height="300px" />
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
        {guessedFeeling === correctFeeling && (<h1> Ai ghicit corect! </h1>)}
      </div>
      <button className="next-button" onClick={restartGame}>URMĂTORUL</button>
    </div>
  );
}

export default FigureGame;
