class hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        if(this.tipo == "mago"){this.ataque = "magia"}
        else if(this.tipo == "guerreiro"){this.ataque = "espada"}
        else if(this.tipo == "monge"){this.ataque = "artes marciais"}
        else {this.ataque = "shuriken"}
    }

    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let mage = new hero("Salazar", 800, "mago")
mage.atacar()

let warrior = new hero("Arthur", 35, "guerreiro")
warrior.atacar()

let monge = new hero("Isac", 80, "monge")
monge.atacar()

let ninja = new hero("Scorpion", 27, "ninja")
ninja.atacar()