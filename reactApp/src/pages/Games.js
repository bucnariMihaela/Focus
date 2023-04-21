import GameCategory from "../components/GameCategory";
import React from "react";

function Games(props) {
  return (
    <div>
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
  );
}

export default Games;
