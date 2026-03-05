const numero1 = document.getElementById("nota1")
const numero2= document.getElementById("nota2")
const button= document.getElementById("button")
const resultado= document.getElementById("resultado")

function calculaMedia(){
    const nota1 = Number(numero1.value)
    const nota2 = Number(numero2.value)

    const media = (nota1 + nota2)/2

    if(media < 5){
        resultado.innerHTML = `Sua média foi ${media.toFixed(2)}, você está reprovado.`
    }else{
        resultado.innerHTML = `Sua média foi ${media.toFixed(2)}, você está aprovado.`
    }
}

button.addEventListener("click", calculaMedia)