new Promise(
    (resolve) => {

        let a = 10
        let b = 12

        resolve(a + b) 
        
    }
).then(
    (res) => {
        console.log("Resultado da promessa: " + res) 
        return res
    }
).then(
    (res) => {
        console.log("Resultado da promessa * 2: " + res * 2) 
        return (res)
    }
).then(
    (res) => {
        console.log("Resultado da promessa * 3: " + res * 3) 
    }
).catch(
    (erro) => {
        console.log("Erro:",erro)
    }
)
///////////////////////////////////////////////////////////////////////////////////
	new Promise(
    (resolve) => {

        let a = 10
        let b = 12

        resolve(a + b  * c) 
        
    }
).then(
    (res) => {
        console.log("Resultado da promessa: " + res) 
        return res
    }
).catch(
    (erro) => {
        console.log("Erro:",erro)
    }
).finally(
    () => console.log("Fim da execução")
)