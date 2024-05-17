import { image_planete } from "../data";
import "../styles/disclaimer-page.css"

function DisclaimerPage() {
  let randomImage = image_planete[Math.floor(Math.random() * image_planete.length)]

  return (
    <section className="disclaimer-page">
      <img src={randomImage.image} alt="illustration planète personnage" />

    </section> 
  )
}
export default DisclaimerPage;
