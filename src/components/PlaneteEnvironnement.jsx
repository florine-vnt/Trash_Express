import { image_planete } from "../data";
import { data_environnement } from "../data";
import "../styles/planete-environnement.css"

function insertLineBreaks(text, maxLength) {
    let result = '';
    let currentLength = 0;

    text.split(' ').forEach(word => {
        if (currentLength + word.length + 1 > maxLength) {
            result += '<br/>' + word + ' ';
            currentLength = word.length + 1;
        } else {
            result += word + ' ';
            currentLength += word.length + 1;
        }
    });

    return result.trim();
}

function PlaneteEnvironnement () {
    let randomImage = image_planete[Math.floor(Math.random() * image_planete.length)]
    let randomData = data_environnement[Math.floor(Math.random() * data_environnement.length)]
    let formattedFact = insertLineBreaks(randomData.fact, 55);

    return (
        <section className="planete-environnement">
            <img src={randomImage.image} alt="illustration planète personnage" />
            <div className="bubble">
            <p dangerouslySetInnerHTML={{ __html: `${formattedFact} <br/>Source : ${randomData.source}` }}></p>
            </div>
        </section>
    )
}

export default PlaneteEnvironnement;