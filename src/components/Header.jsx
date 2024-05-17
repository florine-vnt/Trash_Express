/* eslint-disable react/prop-types */
import "../styles/Header.css";
import boussole from "../assets/boussole2.png";

function Header() {
  function handleClick() {
    const target = document.querySelector(".dechet-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className="header">
      <div className="left-section">
        <img src={boussole} alt="Logo Trash Express" className="logo" />
      </div>
      <div className="right-section">
        <h1> TRASH EXPRESS </h1>
        <h2 className="slogan">A la découverte des dépots sauvages</h2>
        <p className="presentation-text">
          Trouvez les meilleurs endroits pour jeter votre PC et enfin vous
          déconnecter.{" "}<br/>
          Nous avons sélectionné, pour vous, des lieux exceptionnels où vos
          ordinateurs pourront reposer éternellement
        </p>
        <a role="button" className="btn-next-section" onClick={handleClick}></a>
      </div>
     
    </section>
  );
}

export default Header;
