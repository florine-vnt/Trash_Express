import { NavLink, useLoaderData } from "react-router-dom";
import { useState } from "react";

import DechetCard from "./DechetCard";

function DechetSection() {
  const data = useLoaderData();
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value.toLowerCase());
  }

  const filteredData = data.filter((el) =>
    el.name.toLowerCase().includes(text)
  );

  return (
    <section>
      <input
        type="texte"
        placeholder="Trouve ton personnage"
        alt="barre de recherche"
        onChange={handleChange}
        value={text}
      />

      <h1>Ceci est DechetSection</h1>
      <NavLink to="./src/pages/DetailPage.jsx">
        {(text === "" ? data : filteredData).map((el) => (
          <DechetCard key={el.id} />
        ))}
      </NavLink>
    </section>
  );
}

export default DechetSection;
