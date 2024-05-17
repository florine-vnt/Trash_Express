import "../styles/error-page.css";

function ErrorPage (){
    const gifUrl = "https://media1.tenor.com/m/VkRCJzYGdQMAAAAC/pc-man.gif"

    return(
        <section className="gif">
        <p>Tu t'es perdu dans la montagne, ce n'est pas la bonne page !</p>
        <img src={gifUrl} />
        </section>
    )
}

export default ErrorPage;