

function MainContent(props){

    const date = new Date();
    
    const annee = date.getFullYear()
    const jour = date.getDay()
    const mois = date.getMonth()
    const heure = date.getHours()
    const minute = date.getMinutes()
    const seconde = date.getSeconds()

    return(
        <div>
                Ici, nous afficherons des informations interessantes :
                Bonjour, on est le {jour} , {mois} , {annee} et il est {heure}:{minute}:{seconde}
        </div>
    )
}

export default MainContent