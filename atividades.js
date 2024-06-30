function quest01(){
    let A = +prompt("digite o valor de A")
    let B = +prompt("digite o valor de B")
    let C = +prompt("digite o valor de C")
    let soma = A + B
    if(soma > C){
        console.log("o resultado A + B: " , soma ,"é maior que C",  C)
    }else if(soma < C){
        console.log("o resultado A + B: " , soma ,"é menor que C", C)
    }else{
        console.log("o resultado A + B: " , soma ,"é igual a C", C)
    }
}
function  quest02(){
    let nome = (prompt("Digite seu nome")).toUpperCase()
    let sexo = (prompt("Selexione o sexo F/M")).toUpperCase()
    let estadoCivil = (prompt("digite seu estado civil")).toUpperCase()
    if (sexo==="F" && estadoCivil === "CASADA"){
        let tempoDeCasada = prompt("quanto tempo de casada? :")
        console.log("informaçôes:\n", "nome: ",nome ,"\n" ,"sexo: ",sexo ,"\n" ,"estado civil: ",estadoCivil ,"\n","tempo de casada: ",tempoDeCasada) 
    }else{
        console.log("informaçôes:\n", "nome: ",nome ,"\n" ,"sexo: ",sexo ,"\n" ,"estado civil: ",estadoCivil) 

    }


} 
function quest03(){
    let numero = +prompt("digite o numero para checar se é impar ou par:")
    if (numero % 2 === 0){
        console.log(`o numero ${numero} é par` )
    }else{
        console.log(`o numero ${numero} é impar` )
    }

}
function quest04(){
    let A = +prompt("digite o primeiro valor:")
    let B = +prompt("digite o segundo valor:")
    let C = null
    if  (A===B){
        C = A + B
        console.log("valores iguais somados : ", C)
    }else{
        C = A * B
        console.log("valores divergentes multiplicados : ", C)
    }
}
function quest05(){
    let numero = +prompt("digite um numero: ")
    if(numero >= 0){
        console.log(`numero positivo, seu dobro é ${numero * 2}`)
    }else{
        console.log(`numero negativo, seu triplo é ${numero * 3}`)
    }
}
function quest06(A,B){
    if (A && B) {
        console.log("Ambos os valores são VERDADEIROS")
    } else if(!A && !B){
        console.log("Ambos os valores são FALSOS")
    }else {
        console.log("Pelo menos um dos valores é FALSO");
    }

}
function quest07(){
    let numero = +prompt("digite um numero:")
    if (numero % 2 === 0){
        console.log(`o numero ${numero} é par então soma 5, resultado final ${numero + 5}` )

    }else{
        console.log(`o numero ${numero} é impar então soma 8, resultado final ${numero + 8}`)
    }
}
function quest08(){
    let A = +prompt("digite o primeiro valor")
    let B = +prompt("digite o segundo valor")
    let C = +prompt("digite o terceiro valor")

    if (A !== B && A !== C && B !== C) {
        let valores = [A, B, C];
        valores.sort()
        console.log(`Valores em ordem decrescente: \n ${valores[2]} \n ${valores[1]} \n ${valores[0]}`);
    } else {
        console.log("Os valores informados nao podem ser iguais.");
    }
}
function quest09(){
    let altura = +prompt("Digite sua altura")
    let sexo = (prompt("Selexione o sexo F/M")).toUpperCase()

    if (sexo === "M"){
        console.log(`seu peso ideal é ${((72.7*altura) - 58).toFixed(2)}`)
    }else if(sexo === "F"){
        console.log(`seu peso ideal é ${((62.1*altura) - 44.7).toFixed(2)}`)
    }else{
        console.log("preencha o campo sexo somente com ´F` ou ´M` ")
        quest09()
    }
}
function quest10(){
    let altura = +prompt("Digite sua altura")
    let peso = prompt("digite seu peso")
    let imc = peso / (altura**2)

    if(imc < 18.5){
        console.log(`seu IMC é ${imc},condiçao : abaixo do peso`)
    }else if(imc < 25){
        console.log(`seu IMC é ${imc},condiçao : peso normal`)
    }else if(imc < 31){
        console.log(`seu IMC é ${imc},condiçao : acima do peso`)
    }else{
        console.log(`seu IMC é ${imc},condiçao : obeso`)
    }  
}
function quest11(){
    let precoOriginal = +prompt("digite o valor da etiqueta do produto")
    let formaDePagamento = +prompt("digite o codigo da condiçao de pagamento \n 1\n 2\n 3\n 4")

    switch (formaDePagamento) {
        case 1:
            console.log(`a vista em dinheiro ou cheque,desconto de 10%, valor a ser pago \n ${precoOriginal - (precoOriginal*0.10)}`)
            
            break;
        case 2:
            console.log(`a vista no credito,desconto de 15%, valor a ser pago \n ${precoOriginal - (precoOriginal*0.15)}`)
            break;
        case 3:
            console.log(`em duas vezes,preço normal sem juros, valor a ser pago \n ${precoOriginal}`)
            break;
        case 4:
            console.log(`em tres vezes,preço normal mais juros de 10%, valor a ser pago \n ${precoOriginal + (precoOriginal*0.10)}`)
            break;

        default:
            console.log("opçao invalida!")
            quest11()
            break;
    }
}
function quest12(){
    let idAluno = +prompt("digite o ID do aluno")
    let nota1 = +prompt('nota 1')
    let nota2 = +prompt('nota 2')
    let nota3 = +prompt('nota 3')
    let media = (nota1 + nota2 + nota3)/3
    let mA = (nota1 + nota2 * 2 + nota3 * 3 + media )/7
    let conceitoMa = mA >= 9.0 ? "A" :mA >= 7.5 && mA < 9.0 ? "B" :mA >= 6.0 && mA < 7.5 ? "C": mA >= 4.0 && mA < 6.0 ? "D": mA < 4.0? "E" : "erro"
    console.log(`informaçoes do aluno\n ID: ${idAluno}\n Nota1: ${nota1}\n Nota2: ${nota2}\n Nota3: ${nota3}\n Media dos exercicios: ${media.toFixed(2)}\n Media de aproveitamento: ${mA.toFixed(2)}\n Conceito: ${conceitoMa}`)
    conceitoMa === "A" || conceitoMa === "B" || conceitoMa === "c" ? console.log("aluno aprovado") :  conceitoMa === "D" || conceitoMa === "E" ? console.log("aluno reprovado") :console.log("erro")
}