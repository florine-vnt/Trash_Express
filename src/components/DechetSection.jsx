/* eslint-disable react/jsx-key */
import { NavLink, useLoaderData } from "react-router-dom";
import { useState } from "react";


import DechetCard from "./DechetCard";
import Map from "./Map";
import "../styles/dechet-section.css";

function DechetSection() {
  const data = useLoaderData();
  const [text, setText] = useState("");
  console.log("ceci est data", data);

  function handleChange(e) {
    setText(e.target.value.toLowerCase());
  }

  const filteredData = (text !== "" ? (data.filter((trash) => trash.commune.toLowerCase().includes(text) )) : data);

  return (
    <section className="dechet-section">
      <div className="trash-part">
        <h2>Trouvez la dechetterie de vos rêves</h2>
        <input
          type="texte"
          placeholder="Trouvez la dechetterie de vos rêves"
          alt="barre de recherche"
          onChange={handleChange}
          value={text}
        />

        <ul>
          <li className="trash-card">
            {filteredData.map((trash) => (
              <NavLink className="trash-card" to={`/detail/${trash.id}`}>
                <DechetCard key={trash.id} data={trash} />
              </NavLink>
            ))}
          </li>
        </ul>
      </div>

      <Map filteredData={filteredData}/>
    </section>
  );
}

export default DechetSection;
