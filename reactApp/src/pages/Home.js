
import React from "react";
import Games from "./Games";
import "./Home.css";
import Subjects from "./Subjects";
import GameCategory from "../components/GameCategory";


function Home(props ) {
 

  return (
    <>
    <div className="background">
      <div className="subj-container">
      {props.games.map((game) => (
        <GameCategory
          key={game.id}
          name={game.name}
          image={game.image}
          levels={game.levels}
          about={game.about}
          howToPlay={game.howToPlay}
          infos={game.infos}
          url={game.url}
          imgL1 = {game.imgL1}
          imgL2 = {game.imgL2}
        ></GameCategory>
      ))}
        
      </div>
    </div>
    </>
  );
}

export default Home;
