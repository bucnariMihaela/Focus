import React, { useState } from "react";
import "./LevelsModal.css";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

function LevelsModal(props) {
  const [showModal, setShowModal] = useState(false);
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [about, setAbout] = useState(false);

  function handelModalOpen() {
    setShowModal(true);
  }

  function handelModalClose() {
    setShowModal(false);
  }

  return (
    <div className="div-suprem">
      <button onClick={handelModalOpen} className="modal-button">
        JOACĂ ACUM
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
              <div style={{width: "100%",margin:"20px",height:"1px",borderBottom:"2px solid lightgray"}}></div>
              <div className="aboutGame">
                <button
                  className="modal-button"
                  style={{ margin: "10px" }}
                  onClick={() => setAbout(!about)}
                >
                  {!about ? "DESPRE" : "ASCUNDE"}
                </button>
                <p hidden={!about}>{props.about}</p>

                <button
                  className="modal-button"
                  style={{ margin: "10px" }}
                  onClick={() => setShowHowToPlay(!showHowToPlay)}
                >
                  {!showHowToPlay ? "CUM SĂ JOCI" : "ASCUNDE"}
                </button>
                <p hidden={!showHowToPlay}>{props.howToPlay}</p>

                <h1>INFORMAȚII</h1>
                <p> {props.infos}</p>

                <button className="modal-button" onClick={handelModalClose}>
                  ÎNAPOI
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LevelsModal;
