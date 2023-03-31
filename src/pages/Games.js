import GameCategory from "../components/GameCategory";

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
        ></GameCategory>
      ))}
    </div>
  );
}

export default Games;
