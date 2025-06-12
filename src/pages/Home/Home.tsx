import { useState, useRef, useEffect } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Data from "../../services/data";
import Loader from "../../Utils/Loader/Loader";
import { DataColor } from "../../services/interface";
import { DataTrait } from "../../services/interface";
import { DataAspiration } from "../../services/interface";
import { DataJob } from "../../services/interface";
import { DataPrefTue } from "../../services/interface";
import html2canvas from "html2canvas";

function Home() {
  const data = new Data();

  const [dataColor, setDataColor] = useState<DataColor[]>([]);
  const [dataTraits, setDataTraits] = useState<DataTrait[]>([]);
  const [dataAspirations, setDataAspirations] = useState<DataAspiration[]>([]);
  const [dataJobs, setDataJobs] = useState<DataJob[]>([]);
  const [dataPrefTue, setDataPrefTue] = useState<DataPrefTue[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedColor, setSelectedColor] = useState<DataColor | null>(null);
  const [selectedTraits, setSelectedTraits] = useState<DataTrait[]>([]);
  const [selectedAspiration, setSelectedAspiration] =
    useState<DataAspiration | null>(null);
  const [selectedJob, setSelectedJob] = useState<DataJob | null>(null);
  const [selectedRepulse, setSelectedRepulse] = useState<DataPrefTue[]>([]);
  const [showContainers, setShowContainers] = useState<boolean>(false);
  const [selectedPreferences, setSelectedPreferences] = useState<DataPrefTue[]>(
    []
  );

  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [colors, traits, aspirations, jobs, prefTue] = await Promise.all([
          data.getDataColor(),
          data.GetDataTrait(),
          data.GetDataAspiration(),
          data.GetDataJob(),
          data.GetDataPrefTue(),
        ]);

        setDataColor(colors);
        setDataTraits(traits);
        setDataAspirations(aspirations);
        setDataJobs(jobs);
        setDataPrefTue(prefTue);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const selectRandomColor = () => {
    if (dataColor.length === 0) return;
    const randomIndex = Math.floor(Math.random() * dataColor.length);
    setSelectedColor(dataColor[randomIndex]);
  };

  const selectRandomTraits = () => {
    if (dataTraits.length === 0) return;
    const shuffled = [...dataTraits].sort(() => 0.5 - Math.random());
    setSelectedTraits(shuffled.slice(0, 3));
  };

  const selectRandomAspiration = () => {
    if (dataAspirations.length === 0) return;
    const randomIndex = Math.floor(Math.random() * dataAspirations.length);
    setSelectedAspiration(dataAspirations[randomIndex]);
  };

  const selectRandomJob = () => {
    if (dataJobs.length === 0) return;
    const randomIndex = Math.floor(Math.random() * dataJobs.length);
    setSelectedJob(dataJobs[randomIndex]);
  };

  const selectRandomPreferencesAndTurnOffs = () => {
    if (dataPrefTue.length === 0) return;
    const shuffled = [...dataPrefTue].sort(() => 0.5 - Math.random());
    const randomNumber = Math.floor(Math.random() * 46) + 5; // Entre 5 et 50
    const selected = shuffled.slice(0, randomNumber);
    const halfIndex = Math.floor(selected.length / 2);
    setSelectedPreferences(selected.slice(0, halfIndex));
    setSelectedRepulse(selected.slice(halfIndex));
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
    selectRandomPreferencesAndTurnOffs();
  };

  return (
    <>
      <Navbar />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="title_container">
            <h1>Randomiser votre sims :</h1>
            <button className="random_button" onClick={generateRandomSim}>
              Générer un sim aléatoire
            </button>
          </div>
          <div className="random_textintro">
            <p>
              Créer un Sim aléatoire dans Les Sims 4, c'est comme ouvrir une
              boîte de chocolats surprises 🍫—vous ne savez jamais sur quoi vous
              allez tomber ! 🎲
            </p>
            <p>
              Que ce soit un artiste excentrique, un scientifique fou ou un
              athlète ambitieux, chaque Sim aléatoire vous pousse à explorer des
              styles de vie, des carrières et des personnalités inattendus.
            </p>
            <p>
              Ce défi ajoute du piquant 🌶️ et un brin de folie à votre jeu, tout
              en stimulant votre créativité.
            </p>
            <p>
              Que vous soyez novice ou vétéran des Sims, jouer avec un Sim
              aléatoire est une manière fantastique de pimenter votre expérience
              de jeu et de sortir de votre routine.
            </p>
            <p>
              Prêt à découvrir le Sim que le hasard vous réserve ? 🎉 Allez,
              lancez-vous et que l'aventure des Sims commence ! 🏡🕺
            </p>
          </div>
          {showContainers && (
            <>
              <div className="random_container">
                <button className="register_button" onClick={saveAsImage}>
                  Enregistrer en JPEG
                </button>
              </div>
              <div ref={resultRef}>
                {/* COLOR RANDOM */}
                <div className="random_container">
                  <button
                    className="register_button"
                    onClick={selectRandomColor}
                  >
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
                  <button
                    className="register_button"
                    onClick={selectRandomTraits}
                  >
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
                    className="register_button"
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
                  <button className="register_button" onClick={selectRandomJob}>
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

                {/* PREFERENCES & REPULSE RANDOM */}
                <div className="random_container">
                  <button
                    className="register_button"
                    onClick={selectRandomPreferencesAndTurnOffs}
                  >
                    Générer préférences et tue-l'amour aléatoires
                  </button>
                  <div className="prefTu_container">
                    <div className="preferences_section">
                      <h3>Préférences</h3>
                      {selectedPreferences.length > 0 && (
                        <div className="preferences_random">
                          {selectedPreferences.map((pref, index) => (
                            <div key={index} className="pref_random">
                              <p className="pref_random_name">{pref.name}</p>
                              <img
                                src={pref.img}
                                alt={pref.name}
                                className="pref_random_image"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="repulse_section">
                      <h3>Tue-l'amour</h3>
                      {selectedRepulse.length > 0 && (
                        <div className="repulsed_random">
                          {selectedRepulse.map((repulse, index) => (
                            <div key={index} className="repulse_random">
                              <p className="repulse_random_name">
                                {repulse.name}
                              </p>
                              <img
                                src={repulse.img}
                                alt={repulse.name}
                                className="repulse_random_image"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
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

export default Home;
