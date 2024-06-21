import { useState } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Data from "../../services/data";
import { DataColor } from "../../services/interface";
import { DataTrait } from "../../services/interface";
import { DataAspiration } from "../../services/interface";
import { DataJob } from "../../services/interface";

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

  const generateRandomSim = () => {
    selectRandomColor();
    selectRandomTraits();
    selectRandomAspiration();
    selectRandomJob();
  };

  return (
    <>
      <Navbar />
      <div className="sims_container">
        <h1>Randomiser votre sims :</h1>
        <button className="color_button" onClick={generateRandomSim}>
          Générer un sim aléatoire
        </button>
      </div>

      {/* COLOR RANDOM */}
      <div className="color_container">
        <button className="color_button" onClick={selectRandomColor}>
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
      <div className="trait_container">
        <button className="trait_button" onClick={selectRandomTraits}>
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
      <div className="aspiration_container">
        <button className="aspiration_button" onClick={selectRandomAspiration}>
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
            <div className="aspiration_textcontain">
              <p>{selectedAspiration.text}</p>
            </div>
          </div>
        )}
      </div>

      {/* JOB RANDOM */}
      <div className="job_container">
        <button className="job_button" onClick={selectRandomJob}>
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
            <div className="job_textcontain">
              <p>{selectedJob.text}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
