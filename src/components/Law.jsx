import React from "react";
import "../styles/Law.css";

function Law() {
  return (
    <>
      <article className="laLoiCmoi">
        <section>
          <h2>Ce que dit la loi:</h2>
          <p>
            Les dépôts sauvages et les décharges illégales sont punis par la
            loi. En fonction de la gravité des faits (nature, quantité,
            contexte), les sanctions peuvent aller jusqu'à 75 000 € d'amende ou
            de la prison.
          </p>
        </section>
        <section>
          <h2>Amende forfaitaire</h2>
          <p>
            Déposer, abandonner, jeter ou déverser tout type de déchets sur la
            voie publique et privée est puni d'une amende forfaitaire.
          </p>
          <p>
            Si vous payez immédiatement ou dans les 45 jours suivant le constat
            d'infraction (ou l'envoi de l'avis d'infraction), l'amende est de
            135 €.
          </p>
          <p>
            Si vous payez après ce délai de 45 jours, l'amende est de 375 €.
          </p>
          <p>
            Si vous ne payez pas l'amende forfaitaire ou si vous la contestez,
            le juge du tribunal de police est saisi.
          </p>
          <p>
            Le juge pourra décider d'une amende de 750 € maximum (ou jusqu'à 1
            500 €, avec confiscation du véhicule, si vous l'avez utilisé pour
            transporter les déchets).
          </p>
        </section>
      </article>
    </>
  );
}

export default Law;
