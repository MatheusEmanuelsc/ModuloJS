try {

    let nome = "gabi"
    let idade = 27

    let profissao = "Professora"

    if(!nome || !idade || !profissao){

        
        let erroFormulario = new ErroFormulario("ErroFormulario","Campos em branco não permitidos")

        
        throw erroFormulario

    }else{
        console.log("Usuário cadastrado!")
    }


} catch (erro) {
    console.log(erro.name)
    console.log(erro.message)
}

	class ErroCPF extends Error{
    
    constructor(name, message){
        

        super(message)


        this.name = name
    }
}