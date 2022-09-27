let opcao="A";


console.log("Bem Vindo ao sistema de Streamer  qual rede deseja usar?")

console.log("Digite A para Amazon")
console.log("Digite N para Netflix")
console.log("Digite H para HBO")
console.log("Digite D para Disney")
switch (opcao) {
    case "A":
        console.log("Vc escolheu Amazon Prime")
        break;
    case "N":
        console.log("Vc escolheu Netflix")
        break;
    case "H":
        console.log("Vc escolheu HBO Max")
        break;
    case "D":
        console.log("Vc escolheu Disney Plus")
        break;
    default:
        break;
}