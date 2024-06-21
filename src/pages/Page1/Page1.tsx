import { useState } from "react";
import "./Page1.css";
import Navbar from "../../components/Navbar/Navbar";
import Data from "../../services/data";

import { DataMap } from "../../services/interface";

function Page1() {
  const data = new Data();

  const dataMaps: DataMap[] = data.GetDataMap();

  const [selectedMap, setSelectedMap] = useState<DataMap | null>(null);

  const selectRandomMap = () => {
    const randomIndex = Math.floor(Math.random() * dataMaps.length);
    setSelectedMap(dataMaps[randomIndex]);
  };

  return (
    <>
      <Navbar />
      <h1>Randomiser votre lieu de vie :</h1>

      {/* MAP RANDOM */}
      <div className="map_container">
        <button className="map_button" onClick={selectRandomMap}>
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
    </>
  );
}

export default Page1;
