import { image_planete } from "../data";
import "../styles/disclaimer-page.css";
import But from "../components/But";
import Law from "../components/Law";
import PlaneteEnvironnement from "../components/PlaneteEnvironnement";

function DisclaimerPage() {


  return (
    <section className="disclaimer-page">
     <PlaneteEnvironnement />
     <But />
    <Law />
    </section> 
  )
}

export default DisclaimerPage;
