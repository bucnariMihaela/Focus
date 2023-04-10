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

  const [opt, setOptions] = useState([]);

  const [isCorrect, setIsCorrect] = useState(false);

  const [displayedImage, setDisplayedImage] = useState("");

  const restartGame = () => {
    let randomFigure = "";
    let randomFeeling = "";
    let feelings = [];
    let options = [];

    feelings = [...figures.map((figure) => figure.feeling)]; // iau toate feelingurile
    randomFigure = figures[Math.floor(Math.random() * figures.length)]; //iau o figura random
    console.log("random figure");
    randomFeeling = randomFigure.feeling; //iau din figura random si feelingul
    console.log("random feeling");

    const index = feelings.indexOf(randomFeeling);
    if (index > -1) {
        feelings.splice(index, 1);
      }
    

    let randomFeelings = feelings.sort(() => Math.random() - 0.5).slice(0, 2); // iau 2 feelings random

    options = [...randomFeelings].sort(() => Math.random() - 0.5); // combin feelingu corect cu cele doua random

    setCorrectFeeling(randomFeeling);
    setDisplayedImage(randomFigure.image);
    setOptions([...options]);
  };

  useEffect(() => {
    restartGame();
  }, []);

  return (
    <div className="container-figure">
      <h1>Care este starea persoanei? </h1>
      <h1>Alege varianta corectă!</h1>

      <img src={displayedImage} alt="figure" width="300px" height="300px" />
    
    {opt.map((option, index) => (
        
      <button className="figure-button" key={index}>{option}</button>
      
    ))}
     <button className="figure-button">{correctFeeling}</button>
    </div>
  );
}

export default FigureGame;
