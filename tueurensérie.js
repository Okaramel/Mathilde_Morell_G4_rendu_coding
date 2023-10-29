class Tueur{
    constructor(name, health, attack){
        this.name = name ;
        this.health = health ;
        this.attack = attack ;
    }
}

class Personnages{
    constructor(name, caractéristique, death, damage, deathdamage){
        this.name = null ;
        this.caractéristique = null ;
        this.death = 0.3 ;
        this.damage = 0.5 ;
        this.deathdamage = 0.2 ;
    }
}

const prénoms = ["John", "Bill", "George", "Ronald", "Elvis", "Benjamin", "Melissa", "Sarah", "Nicole", "Angela", "Amber", "Emily", "Michael", "Billy", "Willie", "Elijah", "Alex", "Tom", "Kimberly", "Lisa", "Tammy", "Michelle", "Tracy", "Mary"] ;
const caractéristiques = ['The Nerd', 'The Jock', 'The Cheerleader', 'The Know-it-all', 'The Artist'] ;
let Jason = new Tueur('Jason', 100);
let s1 = new Personnages () ;
let s2 = new Personnages () ;
let s3 = new Personnages () ;
let s4 = new Personnages () ;
let s5 = new Personnages () ;

s1.name = prénoms[Math.floor(Math.random()*prénoms.length)] ;
s2.name = prénoms[Math.floor(Math.random()*prénoms.length)] ;
s3.name = prénoms[Math.floor(Math.random()*prénoms.length)] ;
s4.name = prénoms[Math.floor(Math.random()*prénoms.length)] ;
s5.name = prénoms[Math.floor(Math.random()*prénoms.length)] ;
s1.caractéristique = caractéristiques[Math.floor(Math.random()*caractéristiques.length)] ;
s2.caractéristique = caractéristiques[Math.floor(Math.random()*caractéristiques.length)] ;
s3.caractéristique = caractéristiques[Math.floor(Math.random()*caractéristiques.length)] ;
s4.caractéristique = caractéristiques[Math.floor(Math.random()*caractéristiques.length)] ;
s5.caractéristique = caractéristiques[Math.floor(Math.random()*caractéristiques.length)] ;
console.log('Pour cette partie, les personnages seront : \n1.', s1.name, "aka", s1.caractéristique, "\n2.", s2.name, "aka", s2.caractéristique, "\n3.", s3.name, "aka", s3.caractéristique, "\n4.", s4.name, "aka", s4.caractéristique, "\n5.", s5.name, "aka", s5.caractéristique, "\nBonne partie.") ;

let Survivants = [s1, s2, s3, s4, s5] ;
let morts = []
let prob = [0.3, 0.5, 0.2]

while (Jason.health > 0 && Survivants.length > 0){
   this.attack = Survivants[Math.floor(Math.random()*Survivants.length)] ;
   console.log("Jason attaque", this.attack.name ,".") ;
   let randomprob = prob[Math.floor(Math.random() * prob.length)] ;
   if (randomprob == 0.3){
    console.log (this.attack.name, "meurt sans avoir fait aucun dégât.") ;
    morts.push(this.attack.nom);
         Survivants.splice(Survivants.indexOf(this.attack), 1);
   }
   if (randomprob == 0.5){
    console.log (this.attack.name, "esquive l'attaque de Jason et fait 10 points de dégât à ce dernier.") ;
    Jason.health -=10 ;
   }
   if (randomprob == 0.2){
    console.log (this.attack.name, "Inflige 15 points de dégât à Jason mais meurt sous les coups de ce dernier.") ;
    morts.push(this.attack.nom);
         Survivants.splice(Survivants.indexOf(this.attack), 1);
    Jason.health -=15 ;
   }
   if (Jason.health == 0){
    console.log("Les survivants ont réussi à abattre Jason, cependant", morts, "ont été achevés.") ;
    break ;
   }

   if (morts.length == 5){
    console.log ("Tous les survivants sont morts, Jason reste en vie avec", Jason.health, "points de vie.") ;
    break ;
   }
}