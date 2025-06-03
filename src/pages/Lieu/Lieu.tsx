import { useState, useRef, useEffect } from "react";
import "./Lieu.css";
import Navbar from "../../components/Navbar/Navbar";
import Data from "../../services/data";
import { DataMap } from "../../services/interface";
import { DataTraitTerrain } from "../../services/interface";
import { DataDefiTerrain } from "../../services/interface";
import html2canvas from "html2canvas";

function Page1() {
  const data = new Data();
  const [dataMaps, setDataMaps] = useState<DataMap[]>([]);
  const [dataTraitsTerrain, setDataTraitsTerrain] = useState<
    DataTraitTerrain[]
  >([]);
  const [dataDefisTerrain, setDataDefisTerrain] = useState<DataDefiTerrain[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);

  const [selectedMap, setSelectedMap] = useState<DataMap | null>(null);
  const [selectedTraitTerrain, setSelectedTraitTerrain] = useState<
    DataTraitTerrain[]
  >([]);
  const [selectedDefiTerrain, setSelectedDefiTerrain] = useState<
    DataDefiTerrain[]
  >([]);
  const [isDefiButtonClicked, setIsDefiButtonClicked] = useState(false);
  const [selectedbudget, setselectedBudget] = useState<number | null>(null);
  const [showContainers, setShowContainers] = useState<boolean>(false);

  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [maps, traitsTerrain, defisTerrain] = await Promise.all([
          data.GetDataMap(),
          data.GetDataTraitTerrain(),
          data.GetDataDefiTerrain(),
        ]);

        setDataMaps(maps);
        setDataTraitsTerrain(traitsTerrain);
        setDataDefisTerrain(defisTerrain);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const selectRandomMap = () => {
    if (dataMaps.length === 0) return;
    const randomIndex = Math.floor(Math.random() * dataMaps.length);
    setSelectedMap(dataMaps[randomIndex]);
  };

  const selectTraitTerrain = () => {
    if (dataTraitsTerrain.length === 0) return;
    const shuffled = [...dataTraitsTerrain].sort(() => 0.5 - Math.random());
    setSelectedTraitTerrain(shuffled.slice(0, 3));
  };

  const selectDefiTerrain = () => {
    if (dataDefisTerrain.length === 0) return;
    const shuffled = [...dataDefisTerrain].sort(() => 0.5 - Math.random());
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

  const saveAsImage = () => {
    if (resultRef.current) {
      html2canvas(resultRef.current, { useCORS: true }).then((canvas) => {
        const dataUrl = canvas.toDataURL("image/jpeg");
        const link = document.createElement("a");
        link.download = "map random.jpeg";
        link.href = dataUrl;
        link.click();
      });
    }
  };

  const generateRandomPlaceOfLife = () => {
    selectRandomMap();
    selectTraitTerrain();
    selectDefiTerrain();
    selectRandomBudget();
    setShowContainers(true);
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
            <h1>Randomiser votre Lieu de vie :</h1>
            <button
              className="random_button"
              onClick={generateRandomPlaceOfLife}
            >
              Générer un lieu de vie aléatoire
            </button>
          </div>
          <div className="random_textintro">
            <p>
              Choisir un lieu de vie aléatoire dans Les Sims 4, c'est comme
              partir à l'aventure avec un bandeau sur les yeux ! 🏡🎲
            </p>
            <p>
              Vous découvrez des quartiers inattendus, explorez des endroits
              méconnus, et donnez un coup de boost à votre créativité.
            </p>
            <p>
              Chaque nouveau quartier ajoute dupiquant 🌶️ et une bonne dose de
              surprise, transformant chaque partie en une expérience unique et
              mémorable. Que vous soyez novice ou expert des Sims, cette méthode
              est une manière fantastique de renouveler votre gameplay et de
              sortir de votre zone de confort.
            </p>
            <p>
              Prêt à voir où le destin va vous installer ? 🗺️ Allez, lancez-vous
              et que la magie des Sims commence ! 🎉🏠
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
                {/* MAP RANDOM */}
                <div className="random_container">
                  <button className="register_button" onClick={selectRandomMap}>
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
                      <div className="random_textcontain">
                        <p>{selectedMap.text}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* TRAIT TERRAIN RANDOM */}
                <div className="random_container">
                  <button
                    className="register_button"
                    onClick={selectTraitTerrain}
                  >
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
                  <button
                    className="register_button"
                    onClick={selectDefiTerrain}
                  >
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
                  <button
                    className="register_button"
                    onClick={selectRandomBudget}
                  >
                    Générer un budget aléatoire
                  </button>
                  <div>
                    {selectedbudget !== null && (
                      <p className="defi_text">
                        Montant de votre budget de départ :{" "}
                        <span>{selectedbudget} §</span>
                      </p>
                    )}
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

export default Page1;
