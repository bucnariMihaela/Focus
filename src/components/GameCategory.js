import React, {useState} from "react";
import "./GameCategory.css";
import { FaPlay } from "react-icons/fa";
import LevelsModal from "./LevelsModal";


function GameCategory(props) {

  return (
    <div className="container">
      <h2 id="bordering">{props.name}</h2>
      <div className="headImage">
        <img src={props.image} alt="math" width="300px"  />
      </div>
      <div className="overlay">
        <div className="text">This game has {props.levels} levels</div>
        <LevelsModal message ="alege nivelul" about = {props.about} howToPlay = {props.howToPlay} infos = {props.infos} url = {props.url} img={props.img}></LevelsModal>
        
      </div>
    </div>
  );
}

export default GameCategory;
