import React, { useState } from 'react';
import './App.css';
import StudentCard from './components/StudentCard.jsx';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/footer';

import Image from './assets/haroun.png';
import Image1 from './assets/images.png';
import Image2 from './assets/images1.jpg';

const listeInitiale = [
  {
    nom: "haroun ben tekaya",
    email: "harounbentekaya1@gmail.com",
    tel: "+216 26851510",
    filiere: "Génie Logiciel et Système d'information",
    anneEtude: "2026/2027",
    groupe: "GLSI 2 B",
    ville: "teboulba",
    image: Image,
  },
  {
    nom: "mohamedsaleh",
    email: "mohamedsaleh@gmail.com",
    tel: "+216 22 555 555",
    filiere: "Génie Logiciel et Système d'information",
    anneEtude: "2026/2027",
    groupe: "GLSI 2 A",
    ville: "Mahdia",
    image: Image1,
  },
  {
    nom: "mohamed el hadi",
    email: "mohamedelhadi@gmail.com",
    tel: "+216 99 999 999",
    filiere: "Génie Logiciel et Système d'information",
    anneEtude: "2026/2027",
    groupe: "GLSI 2 B",
    ville: "Sousse",
    //image: Image2,
  },
  {
    nom: "mohamed ben omar",
    email: "mohamebenomar@gmail.com",
    tel: "+216 88 888 888",
    filiere: "Génie Logiciel et Système d'information",
    anneEtude: "2026/2027",
    groupe: "GLSI 2 B",
    ville: "djerba",
    image: Image2,

  }
];

function App() {

  const [etudiants, setEtudiants] = useState(listeInitiale);


  function supprimerEtudiant(emailId) {
    setEtudiants(
      (anciensEtudiants) => 
        anciensEtudiants.filter((etudiant) => etudiant.email !== emailId)
    );
  }
  function modifierEtudiant(emailId){
    const nouveauPrenom = prompt("saisir le nouveau prenom:");
    if (
      nouveauPrenom !==null&& nouveauPrenom.trim() !==""
    ){
      setEtudiants((anciensEtudiants) =>
        anciensEtudiants.map(
          (etudiant) =>
            etudiant.emailId ===emailId
              ?{
                ...etudiant,
                prenom: nouveauPrenom.trim(),

              }
            :etudiant,  
        ),
      );
    }
  }

  return (
    <div className="page" id="accueil">
      <Header />
      <Navbar />

      <main className="student-list" id="etudiants">
        {etudiants.map((etudiant) => (
          <StudentCard 
            key={etudiant.email}
            nom={etudiant.nom}
            email={etudiant.email}
            tel={etudiant.tel}
            filiere={etudiant.filiere}
            anneEtude={etudiant.anneEtude}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.image}

            onDelete={() => supprimerEtudiant(etudiant.email)}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;