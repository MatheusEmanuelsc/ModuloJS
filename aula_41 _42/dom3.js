var pessoa = {
    "nome": "jam",
    "idade": 32,
    "cpf": "123456789",
    "competencias": ["js", "cloud", "api"],
    "atividades": [
        {
            "descricao":"Reuniao ",
            "horario":"9:00"
        },
        {
            "descricao":"TransformaTec",
            "horario":"2:00"
        }
    ]
}

console.log("Pessoa", pessoa)

console.log("Nome da pessoa: ", pessoa.nome)

console.log("Competência da pessoa: ", pessoa.competencias[0])

console.log("Nome da atividade da pessoa:", pessoa.atividades[1].descricao)