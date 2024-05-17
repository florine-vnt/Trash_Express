import { image_planete } from "../data";
import "../styles/disclaimer-page.css";
import But from "../components/But";
import Law from "../components/Law";

function DisclaimerPage() {
  let randomImage =
    image_planete[Math.floor(Math.random() * image_planete.length)];

  return (
    <section className="disclaimer-page">
      <img src={randomImage.image} alt="illustration planète personnage" />
      <But />
      <Law />
    </section>
  );
}

export default DisclaimerPage;
