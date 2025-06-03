import "./Challenge.css";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Data from "../../services/data";
import { DataChallenge } from "../../services/interface";
import html2canvas from "html2canvas";

function Page2() {
  const data = new Data();
  const [dataChallenges, setDataChallenges] = useState<DataChallenge[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedChallenge, setSelectedChallenge] =
    useState<DataChallenge | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const challenges = await data.GetDataChallenge();
        setDataChallenges(challenges);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching challenges:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const selectRandomChallenge = () => {
    if (dataChallenges.length === 0) return;
    const randomIndex = Math.floor(Math.random() * dataChallenges.length);
    setSelectedChallenge(dataChallenges[randomIndex]);
  };

  const saveAsImage = () => {
    if (resultRef.current) {
      html2canvas(resultRef.current, { useCORS: true }).then((canvas) => {
        const dataUrl = canvas.toDataURL("image/jpeg");
        const link = document.createElement("a");
        link.download = "challenge random.jpeg";
        link.href = dataUrl;
        link.click();
      });
    }
  };

  return (
    <>
      <Navbar />
      {isLoading ? (
        <div className="loading-container">
          <p>Chargement des données...</p>
        </div>
      ) : (
        <>
          <div className="title_container">
            <h1>Randomiser un challenge :</h1>
            <button className="random_button" onClick={selectRandomChallenge}>
              Générer un challenge aléatoire
            </button>
          </div>
          <div className="random_textintro">
            <p>
              Faire un challenge sur Les Sims 4, c'est comme redécouvrir le jeu
              avec des lunettes 3D ! 🤓
            </p>
            <p>
              Vous explorez des aspects inédits, tout en boostant votre
              créativité à fond.
            </p>
            <p>
              Ces défis ajoutent du piquant 🌶️, un peu de sueur 😅, et surtout,
              une énorme satisfaction à chaque objectif atteint.
            </p>
            <p>
              Que vous soyez un novice ou un pro des Sims, les challenges sont
              une manière fantastique de pimenter votre expérience de jeu et de
              repousser vos limites.
            </p>
            <p>
              Prêt à découvrir le défi que le hasard a choisi pour vous ? 🎲
              Allez, lancez-vous et que la folie des Sims commence ! 🏡🎉
            </p>
          </div>
          <p className="challenge_intro">
            "Ces challenges, soigneusement collectés par des fans, ont été
            répertoriés sur ces forums&nbsp;
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
            <>
              <div className="random_container">
                <button className="register_button" onClick={saveAsImage}>
                  Enregistrer en JPEG
                </button>
              </div>
              <div ref={resultRef}>
                <div className="challenge_random">
                  <div className="challenge_cat">
                    <img
                      className="challenge_img"
                      src={selectedChallenge.img}
                      alt={selectedChallenge.name}
                    />
                    <div>
                      <p className="challenge_name">{selectedChallenge.name}</p>
                      <p className="challenge_name-author">
                        de {selectedChallenge.auteur}
                      </p>
                    </div>
                  </div>
                  <p className="challenge_link">
                    Vous trouverez le challenge complet dans ce &nbsp;
                    <Link
                      className="challenge_intro_link"
                      to={selectedChallenge.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      lien
                    </Link>
                  </p>
                  <div className="random_textcontain">
                    <p>{selectedChallenge.text}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Page2;
