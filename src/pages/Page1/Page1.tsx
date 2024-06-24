import { useState } from "react";
import "./Page1.css";
import Navbar from "../../components/Navbar/Navbar";
import Data from "../../services/data";

import { DataMap } from "../../services/interface";
import { DataTraitTerrain } from "../../services/interface";
import { DataDefiTerrain } from "../../services/interface";

function Page1() {
  const data = new Data();

  const dataMaps: DataMap[] = data.GetDataMap();
  const dataTraitsTerrain: DataTraitTerrain[] = data.GetDataTraitTerrain();
  const dataDefisTerrain: DataDefiTerrain[] = data.GetDataDefiTerrain();

  const [selectedMap, setSelectedMap] = useState<DataMap | null>(null);
  const [selectedTraitTerrain, setSelectedTraitTerrain] = useState<
    DataTraitTerrain[]
  >([]);
  const [selectedDefiTerrain, setSelectedDefiTerrain] = useState<
    DataDefiTerrain[]
  >([]);
  const [isDefiButtonClicked, setIsDefiButtonClicked] = useState(false);
  const [selectedbudget, setselectedBudget] = useState<number | null>(null);

  const selectRandomMap = () => {
    const randomIndex = Math.floor(Math.random() * dataMaps.length);
    setSelectedMap(dataMaps[randomIndex]);
  };

  const selectTraitTerrain = () => {
    const shuffled = dataTraitsTerrain.sort(() => 0.5 - Math.random());
    setSelectedTraitTerrain(shuffled.slice(0, 3));
  };

  const selectDefiTerrain = () => {
    const shuffled = dataDefisTerrain.sort(() => 0.5 - Math.random());
    const randomCount = Math.floor(Math.random() * 5);
    setSelectedDefiTerrain(shuffled.slice(0, randomCount));
    setIsDefiButtonClicked(true);
  };

  const selectRandomBudget = () => {
    const maxIncrements = 200000 / 500 + 1;
    const randomIndex = Math.floor(Math.random() * maxIncrements);
    const randomBudget = randomIndex * 500;
    setselectedBudget(randomBudget);
  };

  const generateRandomPlaceOfLife = () => {
    selectRandomMap();
    selectTraitTerrain();
    selectDefiTerrain();
    selectRandomBudget();
  };

  return (
    <>
      <Navbar />
      <div className="title_container">
        <h1>Randomiser votre Lieu de vie :</h1>
        <button className="random_button" onClick={generateRandomPlaceOfLife}>
          Générer un lieu de vie aléatoire
        </button>
      </div>
      {/* MAP RANDOM */}
      <div className="random_container">
        <button className="random_button" onClick={selectRandomMap}>
          Générer map aléatoire
        </button>
        {selectedMap && (
          <div className="map_random">
            <div className="map_cat">
              <img
                className="map_img"
                src={selectedMap.img}
                alt={selectedMap.name}
              />
              <div className="map_name">
                <p>{selectedMap.name}</p>
              </div>
            </div>
            <div className="map_textcontain">
              <p>{selectedMap.text}</p>
            </div>
          </div>
        )}
      </div>

      {/* TRAIT TERRAIN RANDOM */}
      <div className="random_container">
        <button className="random_button" onClick={selectTraitTerrain}>
          Générer des traits de terrain aléatoire
        </button>
        {selectedTraitTerrain.length > 0 && (
          <div className="Terrains_random">
            {selectedTraitTerrain.map((trait, index) => (
              <div key={index} className="Terrain_random">
                <p className="Terrain_random_name">{trait.name}</p>
                <img
                  src={trait.img}
                  alt={trait.name}
                  className="Terrain_random_image"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* DEFI TERRAIN RANDOM */}
      <div className="random_container">
        <button className="random_button" onClick={selectDefiTerrain}>
          Générer des défis de terrain aléatoire
        </button>
        {isDefiButtonClicked &&
          (selectedDefiTerrain.length > 0 ? (
            <div className="Terrains_random">
              {selectedDefiTerrain.map((defi, index) => (
                <div key={index} className="Terrain_random">
                  <p className="Terrain_random_name">{defi.name}</p>
                  <img
                    src={defi.img}
                    alt={defi.name}
                    className="Terrain_random_image"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="defi_text">
              Vous avez de la chance! Vous avez <span> 0 </span> défi.
            </p>
          ))}
      </div>

      {/* DEFI TERRAIN RANDOM */}
      <div className="random_container">
        <button className="random_button" onClick={selectRandomBudget}>
          Générer un budget aléatoire
        </button>
        <div>
          {selectedbudget !== null && (
            <p className="defi_text">Montant de votre budget de départ : <span>{selectedbudget} §</span></p>
          )}
        </div>
      </div>
    </>
  );
}

export default Page1;
