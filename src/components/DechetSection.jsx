/* eslint-disable react/jsx-key */
import { NavLink, useLoaderData } from "react-router-dom";
import { useState } from "react";

import DechetCard from "./DechetCard";
import Map from "./Map";
import "../styles/dechet-section.css";
import noresult from "../assets/no_result.gif";

function DechetSection() {
  const data = useLoaderData();
  const [text, setText] = useState("");
  console.log("ceci est data", data);

  function handleChange(e) {
    setText(e.target.value.toLowerCase());
  }

  const filteredData =
    text !== ""
      ? data.filter((trash) => trash.commune.toLowerCase().includes(text))
      : data;

  return (
    <section className="dechet-section">
      <div className="background">
        <div className="trash-part">
          <h2>Trouvez le dépôt de vos rêves</h2>
          <input
            type="texte"
            placeholder="  Cherchez votre commune"
            alt="barre de recherche"
            onChange={handleChange}
            value={text}
          />

          <ul>
            {filteredData.length === 0 ? (
              <img id="no-result" src={noresult} />
            ) : (
              <li className="trash-card">
                {filteredData.map((trash) => (
                  <NavLink className="trash-card" to={`/detail/${trash.id}`}>
                    <DechetCard key={trash.id} data={trash} />
                  </NavLink>
                ))}
              </li>
            )}
          </ul>
        </div>

        <Map className="trash-map" filteredData={filteredData} />
      </div>
    </section>
  );
}

export default DechetSection;
