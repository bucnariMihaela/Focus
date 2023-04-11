import React, { useState } from "react";
import "./GameCategory.css";
import { FaPlay } from "react-icons/fa";
import LevelsModal from "./LevelsModal";

function GameCategory(props) {
  return (
    <div className="container">
      <h2 id="bordering">{props.name}</h2>
      <div className="headImage">
        <img src={props.image} alt="math" width="300px" />
      </div>
      <div className="overlay">
        <div className="text">
          Acest joc are {props.levels}{" "} nivele
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
    </div>
  );
}

export default GameCategory;
