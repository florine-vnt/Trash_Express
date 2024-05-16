/* eslint-disable react/jsx-key */
import { NavLink, useLoaderData } from "react-router-dom";
import { useState } from "react";

import DechetCard from "./DechetCard";
import "../styles/dechet-section.css";

function DechetSection() {
  const data = useLoaderData();
  const [text, setText] = useState("");
  console.log("ceci est data", data);

  function handleChange(e) {
    setText(e.target.value.toLowerCase());
  }

  //   const filteredData = data.filter((el) =>
  //     el.name.toLowerCase().includes(text)
  // );

  return (
    <section className="dechet-section">
      <div className="trash-part">
        <input
          type="texte"
          placeholder="Trouvez la dechetterie de vos rêves"
          alt="barre de recherche"
          onChange={handleChange}
          value={text}
        />

        <ul>
          <li className="trash-card">
              {data.map((trash) => (
            <NavLink className="trash-card" to={`/detail/${trash.id}`}>
                <DechetCard key={trash.id} data={trash} />
            </NavLink>
              ))}
          </li>
        </ul>
      </div>

      <img src="https://stickair.com/35378-large_default/carte-de-france.jpg"></img>
    </section>
  );
}

export default DechetSection;
