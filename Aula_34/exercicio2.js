function verificaIdade(a){
    if (a<=12) {
      return  console.log("crianca")
    } else if (a>12 && a<18) {
      return  console.log("Adolescente")
    }else if (a>= 18 && a<=65) {
        return console.log("Adulto")
    } else{
        return console.log("Idoso")
    }
}

verificaIdade(19)