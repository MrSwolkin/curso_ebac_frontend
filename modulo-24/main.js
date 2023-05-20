function Funcionario(nome, idade, cargo) {
    this.nome = nome,
    this.idade = idade,
    this.cargo = cargo


}

function Ator(nome, idade, cargo, pecas, salario) {
    Funcionario.call(this, nome, idade, "Ator");
    this.cargo = cargo;
    this.pecas = pecas;
    this.salario = salario;

    
}

function Balarino(nome, idade, cargo, coreografias, salario) {
    Funcionario.call(this, nome, idade, "Bailarino", 6000);
    this.cargo = cargo;
    this.coreografias = coreografias;
    this.salario = salario;



}



const funcionario1 = new Ator("Erick", 32, "Ator", "Let's talk", 5000)
const funcionario2 = new Ator("Pedro", 45, "ator-mirim", ["Soeto", "Let's talk"], 1200)
const funcionario3 = new Balarino("Bruna", 32, "bailarina", ["giselle", "Sylfide"], 5000)



console.log(funcionario1);
console.log(funcionario2);
console.log(funcionario3);