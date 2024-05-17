import React from 'react';
import '../styles/Header.css';
import boussole from '../assets/boussole2.png';

const Header = () => {
  return (
    <div className="header">
      <div className="left-section">
        <img src={boussole} alt="Logo Trash Express" className="logo"/>
        <h1> TRASH EXPRESS </h1>
        <h2 className='slogan'>
            {/* Sur les traces des meilleurs endroits pour jeter votre PC */}
            À la découverte des dépôts sauvages 
        </h2>
      </div>
      <div className="right-section">
        <p className="presentation-text">Trouvez les meilleurs endroits pour jeter votre PC et enfin déconnecter. </p>
        <p className="presentation-text">
        Nous avons sélectionné des endroits exceptionnels où vos ordinateurs pourront reposer éternellement.</p>
      </div>
    </div>
  );
}

export default Header;