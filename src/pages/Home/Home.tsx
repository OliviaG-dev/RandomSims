import { useState, useRef } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Data from "../../services/data";
import { DataColor } from "../../services/interface";
import { DataTrait } from "../../services/interface";
import { DataAspiration } from "../../services/interface";
import { DataJob } from "../../services/interface";
import html2canvas from "html2canvas";

function Home() {
  const data = new Data();

  const dataColor: DataColor[] = data.getDataColor();
  const dataTraits: DataTrait[] = data.GetDataTrait();
  const dataAspirations: DataAspiration[] = data.GetDataAspiration();
  const dataJobs: DataJob[] = data.GetDataJob();

  const [selectedColor, setSelectedColor] = useState<DataColor | null>(null);
  const [selectedTraits, setSelectedTraits] = useState<DataTrait[]>([]);
  const [selectedAspiration, setSelectedAspiration] =
    useState<DataAspiration | null>(null);
  const [selectedJob, setSelectedJob] = useState<DataJob | null>(null);
  const [showContainers, setShowContainers] = useState<boolean>(false);

  const resultRef = useRef<HTMLDivElement>(null);

  const selectRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * dataColor.length);
    setSelectedColor(dataColor[randomIndex]);
  };

  const selectRandomTraits = () => {
    const shuffled = dataTraits.sort(() => 0.5 - Math.random());
    setSelectedTraits(shuffled.slice(0, 3));
  };

  const selectRandomAspiration = () => {
    const randomIndex = Math.floor(Math.random() * dataAspirations.length);
    setSelectedAspiration(dataAspirations[randomIndex]);
  };

  const selectRandomJob = () => {
    const randomIndex = Math.floor(Math.random() * dataJobs.length);
    setSelectedJob(dataJobs[randomIndex]);
  };

  const saveAsImage = () => {
    if (resultRef.current) {
      html2canvas(resultRef.current, { useCORS: true }).then((canvas) => {
        const dataUrl = canvas.toDataURL("image/jpeg");
        const link = document.createElement("a");
        link.download = "sims random.jpeg";
        link.href = dataUrl;
        link.click();
      });
    }
  };

  const generateRandomSim = () => {
    selectRandomColor();
    selectRandomTraits();
    selectRandomAspiration();
    selectRandomJob();
    setShowContainers(true);
  };

  return (
    <>
      <Navbar />
      <div className="title_container">
        <h1>Randomiser votre sims :</h1>
        <button className="random_button" onClick={generateRandomSim}>
          Générer un sim aléatoire
        </button>
      </div>
      <div className="random_textintro">
        <p>
          Créer un Sim aléatoire dans Les Sims 4, c'est comme ouvrir une boîte
          de chocolats surprises 🍫—vous ne savez jamais sur quoi vous allez
          tomber ! 🎲
        </p>
        <p>
          Que ce soit un artiste excentrique, un scientifique fou ou un athlète
          ambitieux, chaque Sim aléatoire vous pousse à explorer des styles de
          vie, des carrières et des personnalités inattendus.
        </p>
        <p>
          Ce défi ajoute du piquant 🌶️ et un brin de folie à votre jeu, tout en
          stimulant votre créativité.
        </p>
        <p>
          Que vous soyez novice ou vétéran des Sims, jouer avec un Sim aléatoire
          est une manière fantastique de pimenter votre expérience de jeu et de
          sortir de votre routine.
        </p>
        <p>
          Prêt à découvrir le Sim que le hasard vous réserve ? 🎉 Allez,
          lancez-vous et que l'aventure des Sims commence ! 🏡🕺
        </p>
      </div>
      {showContainers && (
        <>
          <div className="random_container">
            <button className="random_button" onClick={saveAsImage}>
              Enregistrer en JPEG
            </button>
          </div>
          <div ref={resultRef}>
            {/* COLOR RANDOM */}
            <div className="random_container">
              <button className="random_button" onClick={selectRandomColor}>
                Générer couleur aléatoire
              </button>
              {selectedColor && (
                <div className="color_random">
                  <p className="color_random_name">{selectedColor.color}</p>

                  <div
                    className="color_random_round"
                    style={{
                      backgroundColor: selectedColor.style,
                    }}
                  ></div>
                </div>
              )}
            </div>

            {/* TRAITS RANDOM */}
            <div className="random_container">
              <button className="random_button" onClick={selectRandomTraits}>
                Générer des traits aléatoires
              </button>
              {selectedTraits.length > 0 && (
                <div className="traits_random">
                  {selectedTraits.map((trait, index) => (
                    <div key={index} className="trait_random">
                      <p className="trait_random_name">{trait.name}</p>
                      <img
                        src={trait.image}
                        alt={trait.name}
                        className="trait_random_image"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ASPIRATION RANDOM */}
            <div className="random_container">
              <button
                className="random_button"
                onClick={selectRandomAspiration}
              >
                Générer une aspiration aléatoire
              </button>
              {selectedAspiration && (
                <div className="aspiration_random">
                  <div className="aspiration_cat">
                    <img
                      className="aspiration_cat_img"
                      src={selectedAspiration.imgcat}
                      alt={selectedAspiration.cat}
                    />
                    <div className="aspiration_name">
                      <p>{selectedAspiration.name}</p>
                      <div>
                        <img
                          className="aspiration_img"
                          src={selectedAspiration.image}
                          alt={selectedAspiration.name}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="random_textcontain">
                    <p>{selectedAspiration.text}</p>
                  </div>
                </div>
              )}
            </div>

            {/* JOB RANDOM */}
            <div className="random_container">
              <button className="random_button" onClick={selectRandomJob}>
                Générer un métier aléatoire
              </button>
              {selectedJob && (
                <div className="job_random">
                  <div className="job_cat">
                    <p className="job_name">
                      {selectedJob.namejob}
                      {selectedJob.branch && ` - ${selectedJob.branch}`}
                    </p>
                    <img
                      className="job_img"
                      src={selectedJob.img}
                      alt={selectedJob.namejob}
                    />
                  </div>
                  <div className="random_textcontain">
                    <p>{selectedJob.text}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Home;
