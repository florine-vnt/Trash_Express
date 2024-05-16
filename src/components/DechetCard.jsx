/* eslint-disable react/prop-types */
function DechetCard({data}) {


  return (
  <section className="trash-content">
  <h2>{data.commune}</h2>
  <h2>{data.departement}</h2>
  </section>
  )
}

export default DechetCard;
