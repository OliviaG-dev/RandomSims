import { useState } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Data from "../../services/data";
import { DataColor } from "../../services/interface";
import { DataTrait } from "../../services/interface";

function Home() {
  const data = new Data();
  const dataColor: DataColor[] = data.getDataColor();
  const dataTraits: DataTrait[] = data.GetDataTrait();

  const [selectedColor, setSelectedColor] = useState<DataColor | null>(null);
  const [selectedTraits, setSelectedTraits] = useState<DataTrait[]>([]);

  const selectRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * dataColor.length);
    setSelectedColor(dataColor[randomIndex]);
  };

  const selectRandomTraits = () => {
    const shuffled = dataTraits.sort(() => 0.5 - Math.random());
    setSelectedTraits(shuffled.slice(0, 3));
  };

  return (
    <>
      <Navbar />
      <h1>Randomizer votre sims :</h1>
      <div className="color_container">
        <button className="color_button" onClick={selectRandomColor}>
          Générer couleur aléatoire
        </button>
        {selectedColor && (
          <div className="color_random">
            
            <p className="color_random_name">{selectedColor.color}</p>
            
            <div className="color_random_round"
              style={{
                backgroundColor: selectedColor.style,
              }}
            ></div>
          </div>
        )}
      </div>

      <div className="trait_container">
        <button className="trait_button" onClick={selectRandomTraits}>
          Générer des trait aléatoires
        </button>
        {selectedTraits.length > 0 && (
          <div className="traits_random">
            {selectedTraits.map((trait, index) => (
              <div key={index} className="trait_random">
                <p className="trait_random_name">{trait.name}</p>
                <img src={trait.image} alt={trait.name} className="trait_random_image" />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
