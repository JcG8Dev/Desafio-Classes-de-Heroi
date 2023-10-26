class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque indefinido";
        }

        return `O ${this.tipo} ${this.nome} atacou usando ${ataque}`;
    }
}

// Teste
const heroi1 = new Heroi("Merlin", 100, "mago");
const heroi2 = new Heroi("Conan", 30, "guerreiro");
const heroi3 = new Heroi("Bruce Lee", 35, "monge");
const heroi4 = new Heroi("Hanzo", 25, "ninja");

console.log(heroi1.atacar());
console.log(heroi2.atacar());
console.log(heroi3.atacar());
console.log(heroi4.atacar());
