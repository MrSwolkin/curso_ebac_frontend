const alunos = [
    {
        "nome": "erick",
        "nota": 6.0
    }, 
    {
        "nome": "Carlos",
        "nota": 8.0
    },
    {
        "nome": "Flavio",
        "nota": 7.8
    },
    {
        "nome": "Gustavo",
        "nota": 3.5
    }

]


function filtrandoAprovados(alunos) {
    return alunos.nota >= 6.0;
}

const aprovados = alunos.filter(filtrandoAprovados);

console.log(aprovados);



