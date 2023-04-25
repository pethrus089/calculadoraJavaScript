var lista = ''
let n1 = 0
let n2 = 0
var sinal = 0
let posicaoSinal = 0
let soma= 0
function add(valor) {
    var tela = window.document.getElementById('tela')
    if (valor == '<') {
        let maiorPosicao = lista.length
        maiorPosicao -= 1
        lista = lista.substring(0, maiorPosicao)
        valor = ''
    }
    if (valor == 'c') {
        valor = ''
        lista = ''
        tela.innerHTML = '0.0'
    } else {
        lista += valor
        tela.innerHTML = lista
        console.log(lista.length)
    }
    if(valor=='+' || valor=='-' || valor=='*' || valor=='/' || valor=='^' || valor=='√' || valor=='%'){
        n1 = Number(lista.substring(0,(lista.length-1)))
        posicaoSinal = lista.length
        sinal = lista.substring(lista.length-1)
        console.log(sinal)
        console.log(n1)
        console.log(sinal)
    }
    if(valor=='='){
        n2 = Number(lista.substring(posicaoSinal,(lista.length-1)))
        console.log(n1)
        console.log(n2)

        switch (sinal){
            case '+':
                soma=n1+n1;
                break;
            case '-':
                soma=n1-n2;
                break;
            case '*':
                soma=n1*n2;
                break;
            case '/':
                soma=n1/n2;
                break;
            case '%':
                soma=(n1/100)*n2;
                break;
            case '√':
                soma= Math.pow(n1,(1/n2));
                break;
            case '^':
                soma= n1**n2;
                break;

        }

        console.log(soma)
        lista = soma
        tela.innerHTML=soma
    }
}