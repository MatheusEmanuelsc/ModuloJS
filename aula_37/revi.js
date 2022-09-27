
// var escopo global
//let escopo local
//const constate ou seja uma vez declarada não podera ser modificada

// uma vez declarada não pode repetir os termos let e var pode se atribuir sozinho




//variavel de escopo var
var nome = "Cassiano";

console.log(nome)

//pode ser redeclarada
var nome = "Ricardo";

console.log(nome)
//variavel de escopo let
let nome = "Cassiano";

console.log(nome)

//não pode ser redeclarada
var nome = "Ricardo"
	//variavel de escopo global let
let nome = "Cassiano";

console.log(nome)

//não pode ser redeclarada
//var nome = "Ricardo"

const nomeLocal = function()
{

    //variável de escopo de função
    let nome = " Ricardo";

    console.log(nome);

    return nome;

}

//valor (nome) da variável atualizado
nome = nome + nomeLocal()

console.log(nome)


