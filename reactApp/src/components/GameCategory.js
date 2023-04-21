import React from "react";
import "./GameCategory.css";
import LevelsModal from "./LevelsModal";

function GameCategory(props) {
  return (
    <div className="container">
      <h2 id="bordering">{props.name}</h2>
      <div className="headImage">
        <img src={props.image} alt="math" width="300" height="300" />
      </div>
        <LevelsModal
          message="Alege nivelul dorit: "
          about={props.about}
          howToPlay={props.howToPlay}
          infos={props.infos}
          url={props.url}
          imgL1={props.imgL1}
          imgL2={props.imgL2}
        ></LevelsModal>
    </div>
  );
}

export default GameCategory;
