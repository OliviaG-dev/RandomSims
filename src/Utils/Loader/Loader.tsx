import "./Loader.css";
import loader from "../../assets/icone/loader.png";

const loaderPhrases = [
  "Génération aléatoire des traits de caractère...",
  "Placement du canapé à 45°, veuillez patienter...",
  "Connexion au Plumbob principal...",
  "Réveil des Sims en cours...",
  "Traitement des envies et des besoins...",
  "Chargement des interactions sociales bizarres...",
  "Simulation du libre arbitre en cours...",
  "Mise en place du barbecue sans surveillance...",
  "Polissage du miroir pour introspection existentielle...",
  "Test des bulles de pensée des Sims...",
  "Réglage des danses embarrassantes...",
  "Activation du mode 'drame familial'...",
  "Synchronisation avec le chat virtuel...",
  "Préparation des fringues à la mode...",
  "Chargement des gnomes jardiniers...",
  "Compilation des histoires de voisins indiscrets...",
  "Calibration du Plumbob vert fluo...",
  "Optimisation des sauts sur le trampoline...",
  "Génération des blagues nulles...",
  "Configuration des cris de bébé virtuel...",
  "Mise à jour des bugs oubliés...",
  "Chargement du buffet gratuit...",
  "Réorganisation des meubles psychorigides...",
  "Préparation de la piscine gonflable...",
  "Activation du mode 'fête surprise'...",
  "Chargement des talents cachés...",
  "Déploiement des avatars bizarres...",
  "Chargement des recettes étranges...",
  "Création de la playlist karaoké...",
  "Test des chaises qui grincent...",
  "Lancement des farces et attrapes...",
  "Chargement des fringues flashy...",
  "Réglage du volume du karaoké...",
];

function Loader() {
  const randomPhrase =
    loaderPhrases[Math.floor(Math.random() * loaderPhrases.length)];

  return (
    <div className="loader_container">
      <div className="loader_text_container">
        <p className="loader_text">{randomPhrase}</p>
      </div>
      <div className="loader_img_container">
        <img src={loader} alt="Sims 4 Logo" className="loader_img" />
      </div>
    </div>
  );
}

export default Loader;
