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
        <FaPlay
          style={{ fontSize: "50px ", color: "black", padding: "20px" }}
        />
      </button>

      {showModal && (
        <div className="backdrop">
          <div className="modal">
            <header id="h-modal">
              <h1>{props.message}</h1>
            </header>
            <div className="fundal-alb">
              <div className="content-levels">
                <Link to={props.url + "/1"}>
                  <h2>Nivel 1</h2>
                  <img
                    src={props.imgL1}
                    alt="farm animals"
                    width="200"
                    height="200"
                  ></img>
                  <button className="modal-button">JOACĂ</button>
                </Link>
                <Link to={props.url + "/2"}>
                  <h2>Nivel 2</h2>
                  <img
                    src={props.imgL2}
                    alt="faces figures"
                    width="200"
                    height="200"
                  ></img>
                  <button className="modal-button">JOACĂ</button>
                </Link>
              </div>
              <div className="aboutGame">
                <h1>DESPRE JOC</h1>
                <p> {props.about}</p>
          
                <h1>CUM SĂ JOCI</h1>
                <p>{props.howToPlay}</p>

                <h1>INFORMAȚII</h1>
                <p> {props.infos}</p>
              
                  <button className="modal-button" onClick ={handelModalClose}>ÎNAPOI</button>
            
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LevelsModal;
