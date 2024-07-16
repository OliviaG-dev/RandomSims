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
          Choisir un lieu de vie aléatoire dans Les Sims 4, c'est comme partir à
          l'aventure avec un bandeau sur les yeux ! 🏡🎲
        </p>
        <p>
          Vous découvrez des quartiers inattendus, explorez des endroits
          méconnus, et donnez un coup de boost à votre créativité.
        </p>
        <p>
          Chaque nouveau quartier ajoute du piquant 🌶️ et une bonne dose de
          surprise, transformant chaque partie en une expérience unique et
          mémorable.
        </p>
        <p>
          Que vous soyez novice ou expert des Sims, cette méthode est une
          manière fantastique de renouveler votre gameplay et de sortir de votre
          zone de confort. Prêt à voir où le destin va vous installer ? 🗺️
          Allez, lancez-vous et que la magie des Sims commence ! 🎉🏠
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
