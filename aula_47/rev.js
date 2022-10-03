function soma (){

    let a = 30
    let b = 40

    let c = a + b //70

    
    setTimeout(
        function (){
            media(c)
        },
        4000
    )
}


function media (n){ //n = 70

    let m = n/2

    
    setTimeout(
        function (){
            escreveMedia(m)
        },
        5000
    )

}


function escreveMedia(r){
    
    console.log("Media: ", r)
}

soma()