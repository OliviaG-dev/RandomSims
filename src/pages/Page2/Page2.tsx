import "./Page2.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Data from "../../services/data";

import { DataChallenge } from "../../services/interface";

function Page2() {
  const data = new Data();

  const DataChallenges: DataChallenge[] = data.GetDataChallenge();

  const [selectedChallenge, setSelectedChallenge] = useState<DataChallenge | null>(null)
  
  const selectRandomChallenge = () => {
    const randomIndex = Math.floor(Math.random() * DataChallenges.length);
    setSelectedChallenge(DataChallenges[randomIndex]);
  }
  
  
  return (
    <>
      <Navbar />
      <div className="title_container">
        <h1>Randomiser un challenge :</h1>
        <button className="random_button" onClick={selectRandomChallenge}>
          Générer un challenge aléatoire
        </button>
      </div>
      <div className="challenge_text">
        <p>
          Faire un challenge sur Les Sims 4, c'est comme redécouvrir le jeu avec
          des lunettes 3D ! 🤓{" "}
        </p>
        <p>
          {" "}
          Vous explorez des aspects inédits, tout en boostant votre créativité à
          fond.
        </p>
        <p>
          Ces défis ajoutent du piquant 🌶️, un peu de sueur 😅, et surtout, une
          énorme satisfaction à chaque objectif atteint.
        </p>
        <p>
          Que vous soyez un novice ou un pro des Sims, les challenges sont une
          manière fantastique de pimenter votre expérience de jeu et de
          repousser vos limites.{" "}
        </p>
        <p>
          Prêt à découvrir le défi que le hasard a choisi pour vous ? 🎲 Allez,
          lancez-vous et que la folie des Sims commence ! 🏡🎉
        </p>
      </div>
      <p className="challenge_intro">
        "Ces challenges, soigneusement collectés par des fans, ont été répertoriés sur
        ces forums&nbsp;
        <Link
          className="challenge_intro_link"
          to="https://luniversims.fr/index.html/les-sims-4/les-sims-4-news/les-sims-4-liste-des-challenges-r1389/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ici
        </Link>
        &nbsp;et&nbsp;
        <Link
          className="challenge_intro_link"
          to="https://forums.thesims.com/fr_FR/discussion/comment/12393236/#Comment_12393236"
          target="_blank"
          rel="noopener noreferrer"
        >
          ici
        </Link>
        ."
      </p>

      {selectedChallenge && (
          <div className="map_random">
            <div className="map_cat">
              <img
                className="map_img"
                src={selectedChallenge.img}
                alt={selectedChallenge.name}
              />
              <div className="map_name">
                <p>{selectedChallenge.name}</p>
                <p>de {selectedChallenge.auteur}</p>
              </div>
            </div>
            <p>Vous trouverez le challenge complet dans ce &nbsp;
            <Link
          className="challenge_intro_link"
          to="https://luniversims.fr/index.html/les-sims-4/les-sims-4-news/les-sims-4-liste-des-challenges-r1389/"
          target="_blank"
          rel="noopener noreferrer"
        >
          lien
        </Link>
            </p>
            <div className="map_textcontain">
              <p>{selectedChallenge.text}</p>
            </div>
          </div>
        )}
    </>
  );
}

export default Page2;
