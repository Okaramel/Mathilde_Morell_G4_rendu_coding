class Personnage{
    constructor(name, sante_mentale){
        this.name = name ;
        this.sante_mentale = sante_mentale ;
    }
}
class Trajet{
    constructor(){
        this.radio = null ;
        this.feux_rouges = 30 ;
        this.changement_taxis = 0 ;
    }
}

const John = new Personnage ('John', 10) ;
const trajet = new Trajet () ;
const music= ["Anissa - Wejdene", "Level of Concern - Twenty-One Pilots", "Redbone - Childish Gambino", "Sky Hooks and Tartan Paint - Sting", "Art Deco - Lana Del Rey"] ;

while (trajet.feux_rouges>0 && John.sante_mentale > 0){
    trajet.radio = music[Math.floor(Math.random()*music.length)] ;
    console.log(trajet.radio)
    console.log("La musique", trajet.radio, "se joue au", trajet.feux_rouges, "ème feux rouge.") ;
    if (trajet.radio =="Anissa - Wejdene"){
        John.sante_mentale -- ;
        trajet.changement_taxis ++ ;
        console.log("John a perdu 1 hp de sa santé mentale, il n'a plus que", John.sante_mentale, "points de vie. Il a changé", trajet.changement_taxis, "fois.") ;
    }
    else if (John.sante_mentale==0){
        console.log("Sa santé mentale tombe à 0, John explose. End.") ;
        break ;
    }
    else if (trajet.feux_rouges==0){
        console.log("John est arrivé à destination après", trajet.changement_taxis, "taxis avec", John.sante_mentale, "points de vie") ;
        break ;
    }
    else {
       trajet.feux_rouges -- ;
    }
}