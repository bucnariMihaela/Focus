import React, { useState } from "react";
import "./LevelsModal.css";
import { FaPlay } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";

function LevelsModal(props) {
  const [showModal, setShowModal] = useState(false);

  function handelModalOpen() {
    setShowModal(true);
  }

  function handelModalClose() {
    setShowModal(false);
  }

  return (
    <div>
      <button onClick={handelModalOpen}>
        <FaPlay style={{ fontSize: "50px ", color: "black", padding: "20px" }} />
      </button>

      {showModal && (
        <div className="backdrop">
          <div className="modal">
            <header id="h-modal">
              <h2>{props.message}</h2>
            </header>
            <div className="fundal-alb">
            <div className="content-levels">
            <Link to={props.url+"/1"}><h2>level 1</h2></Link>
            <Link to={props.url+"/2"}><h2>level 2</h2></Link>
            </div>
            <div className="aboutGame"> 
            <h1>ABOUT GAME</h1>
            <p> {props.about}</p>
            </div>
            <div className="howToPlay"> 
            <h1>HOW TO PLAY</h1>
            <p>{props.howToPlay}</p>
            </div>
            <div className="gameInfo">
              <h1>GAME INFO</h1>
              <p> {props.infos}</p>
            </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default LevelsModal;
