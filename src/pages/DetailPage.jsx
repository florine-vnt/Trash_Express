import { useLoaderData } from "react-router-dom";
import "../styles/detail-page.css"

function DetailPage() {
  const data = useLoaderData();

  return (
    <figure className="detail-page">
      <h2>Zoom sur la décharge de {data.commune}</h2>
      <img src={data.image} alt="photo d'une décharge" />
      <p>" {data.avis} "</p>
    </figure>
  )
  
}
export default DetailPage;
