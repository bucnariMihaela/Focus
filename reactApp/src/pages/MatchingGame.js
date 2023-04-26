import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./MatchingGame.css";

function MatchingGame() {
  const navigate = useNavigate();
  const cards = [
    [
      "/GamesCategoryImages/MatchingGame/fruits/strawberry.png",
      "/GamesCategoryImages/MatchingGame/fruits/ananas.png",
      "/GamesCategoryImages/MatchingGame/fruits/cherry.png",
      "/GamesCategoryImages/MatchingGame/fruits/apple.png",
      "/GamesCategoryImages/MatchingGame/fruits/banana.png",
      "/GamesCategoryImages/MatchingGame/fruits/grapes.png",
      "/GamesCategoryImages/MatchingGame/fruits/orange.png",
      "/GamesCategoryImages/MatchingGame/fruits/pear.png",
    ],
    [
      "/GamesCategoryImages/MatchingGame/vegetables/tomato.png",
      "/GamesCategoryImages/MatchingGame/vegetables/eggplant.png",
      "/GamesCategoryImages/MatchingGame/vegetables/pumpkin.png",
      "/GamesCategoryImages/MatchingGame/vegetables/mushroom.png",
      "/GamesCategoryImages/MatchingGame/vegetables/onion.png",
      "/GamesCategoryImages/MatchingGame/vegetables/broccoli.png",
      "/GamesCategoryImages/MatchingGame/vegetables/cucumber.png",
      "/GamesCategoryImages/MatchingGame/vegetables/potato.png",
    ],
  ];
  const { level } = useParams();

  const [pairs, setPairs] = useState(cards.concat(cards));

  const [clickedCard, setClickedCard] = useState([]);

  const [flippedCards, setFlippedCards] = useState([]);

  const [showAll, setShowAll] = useState(true);

  const [count, setCount] = useState(0);

  const [showHint, setShowHint] = useState(false);

  const [timer, setTimer] = useState(0);

  const [timerInterval, setTimerInterval] = useState(0);

  const shuffle = (cards) => {
    // fac sa apara imaginile random
    //fisher-yates alg
    for (let i = cards.length - 1; i > 0; i--) {
      //pairs sau cards ?
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  };

  let randomImages = [];

  const restartGame = () => {
    setShowAll(true);
    setTimeout(
      () => {
        setShowAll(false);
      },
      level === "1" ? 6000 : 3000
    );

    if (level === "1") {
      randomImages = shuffle([...cards[0], ...cards[0]]);
      setShowHint(true);
    } else {
      randomImages = shuffle([...cards[1], ...cards[1]]);
      setShowHint(false);
    }

    setPairs(randomImages);

    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);
    setTimerInterval(interval)
  };

  const clickedCardHandler = (index) => {
    if (clickedCard.length === 0) {
      // daca nu am apasat pe niciun card inca, atunci fa-l pe asta cardul curent pe care urmeaza sa il compar
      setClickedCard([index]);
    } else if (clickedCard.length === 1) {
      setClickedCard([...clickedCard, index]);

      // daca e o imagine deja intoarsa, compara img deja intoarsa cu img asta
      const firstIndex = clickedCard[0];
      const secondIndex = index;

      const firstCard = pairs[firstIndex];
      const secondCard = pairs[secondIndex];

      if (firstCard === secondCard && firstIndex !== secondIndex) {
        setFlippedCards([...flippedCards, firstIndex, secondIndex]);
        // cartea a fost adaugata in flipped cards, deci putem goli clicked card instant
        setClickedCard([]);
      } else {
        // asteapta doua secunde inainte sa setezi clicked card la lista goala
        setTimeout(() => {
          setClickedCard([]);
        }, 2000);
      }
    } else {
      setTimeout(() => {
        setClickedCard([]);
      }, 1000);
    }
  };

  const hintHandler = () => {
    setShowAll(true);
    setTimeout(() => {
      setClickedCard([]);
    }, 1000);
    setCount(count + 1);
    setTimeout(() => {
      setShowAll(false);
    }, 1000);
  };

  const onClick = () => {
    navigate("/");
  };

  useEffect(()=>{
    if(flippedCards.length === cards[0].length * 2){
      clearInterval(timerInterval);
    }
  }, [flippedCards])

  useEffect(() => {
    restartGame();
  }, []);

  return (
    <>
      <div className="matching-game-container">
        <h1>NIVEL: {level}</h1>
        <p>Timer: {timer} seconds</p>
        <div className="cardsContainer square">
          {pairs.map((pair, index) => (
            <div className={"card"} key={index}>
              <div
                onClick={() => clickedCardHandler(index)}
                className={
                  clickedCard.includes(index) ||
                  flippedCards.includes(index) ||
                  showAll
                    ? "front"
                    : "gray front"
                }
              >
                <img
                  src={pair}
                  alt="fruit"
                  className={
                    clickedCard.includes(index) ||
                    flippedCards.includes(index) ||
                    showAll
                      ? "matching-game-img"
                      : "hidden"
                  }
                ></img>
              </div>
            </div>
          ))}
        </div>
        {showHint && (
          <button
            disabled={count === 3}
            style={{ marginLeft: "40px", marginTop: "20px" }}
          >
            <div onClick={hintHandler}>
              <img
                src="/GamesCategoryImages/MatchingGame/fruits/hint.png"
                height={60}
                width={60}
              ></img>
            </div>
          </button>
        )}
        <div className="buttons-match">
          <button
            className="matching-button"
            onClick={restartGame}
            style={{ marginRight: "30px", marginTop: "20px" }}
          >
            Resetează
          </button>
          <button
            className="matching-button"
            onClick={onClick}
            style={{ marginTop: "20px" }}
          >
            ÎNAPOI
          </button>
        </div>
      </div>
    </>
  );
}
export default MatchingGame;
