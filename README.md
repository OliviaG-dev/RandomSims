# 🎮 Projet RandomSims 🎮

Bienvenue dans le projet **RandomSims** ! Ce projet est une application web développée avec TypeScript et React, et gérée avec pnpm. L'application permet aux utilisateurs de générer des défis aléatoires pour Les Sims 4, que ce soit pour un lieu de vie, un Sim ou d'autres aspects du jeu. Prêt à voir vos Sims vivre des aventures complètement dingues ? 🤪

![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue.svg) ![React](https://img.shields.io/badge/React-18.2-blue.svg) ![pnpm](https://img.shields.io/badge/pnpm-6.0-yellow.svg) ![Prettier](https://img.shields.io/badge/prettier-3.2.5-ff69b4.svg) ![ESLint](https://img.shields.io/badge/eslint-8.57.0-4B32C3.svg) ![Vite](https://img.shields.io/badge/vite-5.2.5-blue.svg) ![License](https://img.shields.io/badge/license-MIT-green.svg) 

Découvrez ce projet **RandomSims** 🎲🎮 juste [ici](https://random-sims-76gw3lovx-oliviag-devs-projects.vercel.app/) !


## 📑 Table des matières

- [📅 Mises à jour](#mises-à-jour)
- [🔧 Technologies utilisées](#technologies-utilisées)
- [🛠️ Installation](#installation)
- [🚀 Lancement](#lancement)
- [🎯 Fonctionnalités](#fonctionnalités)
- [🗂️ Structure du projet](#structure-du-projet)
- [🤝 Contribuer](#contribuer)
- [📜 Licence](#licence)

## 📅 Mises à jour

### 31 octobre 2024 🎃

- Ajout du pack **À la vie, à la mort** 💀:
  - Ajout du métier jouable **Faucheuse** : incarnez la Faucheuse et guidez les âmes vers l’au-delà.
  - Ajout du métier **Personnel de pompes funèbres** avec deux branches :
    - **Croque-mort**
    - **Responsable de pompes funèbres**
  - Ajout de trois nouveaux traits de personnalité :
    - **Macabre** : les Sims sont fascinés par la mort.
    - **Sceptique** : les Sims doutent de l'au-delà.
    - **Poursuivi par la Mort** : les Sims sentent une présence sinistre autour d’eux.
  - Ajout de la nouvelle map **RavenWood** : explorez un monde mystérieux et inquiétant.
  - Ajout du nouveau défi de terrain **Envie de frissonner** : des événements paranormaux se produisent plus souvent.
  - Ajout de la nouvelle aspiration **Historien des fantômes** : devenez un expert des esprits et de leurs histoires.

### 1er Août 2024 ☀️

- Ajout du pack **Amour Fou** 💖:
  - Ajout de la fonctionnalité **Tue l'amour** : Les Sims peuvent désormais avoir des interactions qui diminuent les relations amoureuses.
  - Ajout de la fonctionnalité **Préférences** : Les Sims peuvent maintenant exprimer leurs préférences et aversions, ajoutant une nouvelle couche de réalisme et de complexité dans leurs interactions.
  - Ajout du métier **Consultante en amour** avec deux branches :
    - **Thérapeute de couple**
    - **Entremetteuse**
  - Ajout de deux nouvelles aspirations :
    - **Partenaire modèle**
    - **Explorateur romantique**
  - Ajout de la nouvelle map **Ciudad Enamorada** 
  - Ajout d'un nouveau trait de terrain : **Repaire de célibataire**
  - Ajout de trois nouveaux traits de personnalité :
    - **La pratique permet d'atteindre la perfection**
    - **Prudent en amour**
    - **A un cœur d'artichaut**

## 🔧 Technologies utilisées

Ce projet utilise les technologies et dépendances suivantes :

- **React** ⚛️
- **React DOM** 🖥️
- **React Router DOM** 🌐
- **TypeScript** 📝
- **Vite** ⚡
- **html2canvas** 🖼️
- **ESLint** 🚨
- **Prettier** 💅
## 🛠️ Installation

Pour installer et configurer le projet localement, suivez ces étapes :

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/randomizer-sims.git
   cd randomizer-sims

2. Installez les dépendances avec pnpm ( html2canvas , react-router-dom, ):
   ```bash
   pnpm install

## 🚀 Lancement
- **`pnpm run dev`** : Lancer le projet.


## 🎯 Fonctionnalités

RandomSims est là pour transformer votre expérience avec Les Sims 4 ! Voici ce qu'il vous propose :


- 🎲 **Génération aléatoire de défis et de scénarios** : Laissez le hasard guider vos Sims vers des aventures inattendues et hilarantes.
- 📸 **Capture avec HTML2Canvas** : Immortalisez les combinaisons les plus hilarantes et mémorables de vos Sims grâce à des captures d'écran uniques.
- 🔄 **Intégration fluide avec React Router** : Naviguez sans effort entre les différentes pages de votre application pour une gestion facile de vos défis et de vos Sims.
- 📱 **Responsive et mobile-friendly** : Profitez d'une expérience optimale sur toutes les tailles d'écran, y compris les téléphones portables.

Préparez-vous à vivre des moments épiques et à explorer les possibilités infinies des Sims 4 avec Randomizer Sims ! 🚀👾


 ## 📂 Structure du projet 

```csharp
📁 public
│   ├── index.html
│   └── ...
📁 src
│   ├── components
│   │   └── ...
│   ├── pages
│   │   └── ...
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
📄 .gitignore
📄 package.json
📄 pnpm-lock.yaml
📄 tsconfig.json
📄 README.md
```

- **`public/`** : Contient les fichiers statiques de l'application.
- **`src/`** : Contient le code source de l'application.
  - **`components/`** : Composants réutilisables.
  - **`pages/`** : Pages de l'application.
- **`App.tsx`** : Point d'entrée principal de l'application.
- **`index.tsx`** : Initialise l'application.


## 🤝 Contribuer

Les contributions sont les bienvenues ! Pour contribuer :

1. 🍴 Forkez le projet.
2. 🌿 Créez une branche pour votre fonctionnalité (`git checkout -b feature/ma-fonctionnalité`).
3. 💾 Commitez vos modifications (`git commit -m 'Ajouter ma fonctionnalité'`).
4. 📤 Poussez votre branche (`git push origin feature/ma-fonctionnalité`).
5. 🔃 Ouvrez une Pull Request.

## 📜 Licence
Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus d'informations.