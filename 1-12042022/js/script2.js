/*
Script para o cálculo das operações
matemáticas:

    -Soma;
    -Subtração;
    -Multiplicação;
    -Divisão;
    -Resto;
Será necessário mais 2 variáveis para
receber os números dos usúarios
*/

var numero1;

var numero2;

// para obter o numero digitado pelo usuario usaremos
// o comando prompt(que um input para dados)

numero1=prompt("Digite um número","0");
numero2=prompt("Digite outro número");

var soma = parseInt(numero1) + parseInt(numero2);
var subtrair = parseInt(numero1) - parseInt(numero2);
var multiplicar = parseInt(numero1) * parseInt(numero2);
var dividir = parseInt(numero1) / parseInt(numero2);
var resto = parseInt(numero1) % parseInt(numero2);

alert("O resultado das operações é:\n\n"+ // \n\n serve para quebrar a linha
    "soma: "+soma+
    "\nSubtração: "+subtrair+
    "\nmultiplicação: "+multiplicar+
    "\ndividir: "+dividir+
    "\nresto: "+resto);