import React, { useState } from 'react';

function StudentCard(props) {
  const [showCoords, setShowCoords] = useState(false);

  return (
    <div className='container'>
      <div className='card'>
        <img className="student-image" src={props.image} alt={props.nom} />
        <h1>Fiche etudiant</h1>
        
        <p><strong>Nom & Prénom :</strong> {props.nom}</p>

        {showCoords && (
          <>
            <p><strong>Email:</strong> {props.email}</p>
            <p><strong>Téléphone:</strong> {props.tel}</p>
          </>
        )}

        <p><strong>Filière:</strong> {props.filiere}</p>
        <p><strong>Année d'étude :</strong> {props.anneEtude}</p>
        <p><strong>Groupe:</strong> {props.groupe}</p>
        <p><strong>Ville:</strong> {props.ville}</p>


        <button onClick={() => setShowCoords(!showCoords)}>
          {showCoords ? 'Masquer les coordonnées' : 'Afficher les coordonnées'}
        </button>
        
        <button>contacter</button>


        <button onClick={props.onDelete} className="btn-delete">
          Supprimer
        </button>
        <button onClick={()=>onModifier(etudiant.id)}>Modifier 

        </button>
      </div>
    </div>
  );
}

export default StudentCard;