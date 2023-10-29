class Pokemon{
    constructor(name,attack,defense,hp,luck){
        this.name = name ;
        this.attack = attack ;
        this.defense = defense ;
        this.hp = hp ;
        this.luck = luck ;
    }
}

function isLucky(){
    return this.luck > Math.random()
}

function attackPokemon(pokemon){
    if (this.isLucky()){
        let damage = this.attack - pokemon.defense
        pokemon.hp -= damage
        console.log(this.name, "a attaqué", pokemon.name, "pour", damage, "points de dégâ. Il lui reste", pokemon.hp, "points de vie.")
    } else {
        console.log(this.name, "a raté son attaque.")
    }
}

let Dracaufeu = new Pokemon('Dracaufeu', 10, 15, 100, 0.8)
let Pikachu = new Pokemon('Pikachu', 15, 5, 100, 0.4)

while (Dracaufeu.hp > 0 && Pikachu.hp > 0){
    Dracaufeu.attackPokemon(Pikachu)
    if (Dracaufeu <= O){
       console.log(Dracaufeu.name, "a succombé sous les attaques de", Pikachu.name)
       break
    }

    Pikachu.attackPokemon(Dracaufeu)
        if (Pikachu <= 0){
            console.log(Pikachu.name, "a succombé sous les attaques de", Dracaufeu.name)
        }
}