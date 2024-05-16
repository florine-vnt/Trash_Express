import { useLoaderData } from "react-router-dom";
import "../styles/detail-page.css"

function DetailPage() {
  const data = useLoaderData();

  return (
    <figure className="detail-page">
      <img src={data.image} alt="photo d'une décharge" />
      <p>{data.commune}, {data.departement}</p>
      <p>" {data.avis} "</p>
    </figure>
  )
  
}
export default DetailPage;
