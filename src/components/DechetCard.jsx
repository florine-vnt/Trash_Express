/* eslint-disable react/prop-types */
function DechetCard({data}) {


  return (
  <section className="trash-content">
  <h2 className="textes">{data.commune}</h2>
  <h2 className="textes">{data.departement}</h2>
  </section>
  )
}

export default DechetCard;
