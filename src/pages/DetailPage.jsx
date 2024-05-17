/* eslint-disable react/no-unescaped-entities */
import { useLoaderData } from "react-router-dom";
import "../styles/detail-page.css"
import { data_names } from "../data";

function DetailPage() {
  const data = useLoaderData();
  let randomDatas = data_names[Math.floor(Math.random() * data_names.length)]
  
  return (
    <figure className="detail-page">
      <h2>Zoom sur la décharge de {data.commune}</h2>
      <img src={data.image} alt="photo d'une décharge" />
      <figcaption>
      <p>"{data.avis}" <br/>{randomDatas.name}, {randomDatas.date}.</p>
      </figcaption>
    </figure>
  );
}
export default DetailPage;