function tabuada(){
    var n = prompt("Entre com um número para fazer a tabuada");
    var rs = "";
    for(var i = 0 ; i <= 10 ; i++){
        rs +=  "\n" + n + " x " + i + " = " + n * i;
    }

    return rs;
}

function retangulo(){
    var saida = "";
        for (let linha = 0; linha <= 30; linha++){
            for (let coluna = 0; coluna <= 50; coluna++){
                saida += "*";
            }

            saida += "<br>"

            document.getElementById("painel").innerHTML = saida;
        }
}

function triangulo(){
    var saida = "";
    for (let linha = 30; linha >= 0; linha--){
        for (let coluna = 0; coluna <= linha; coluna++){
            saida += "*";
        }

        saida += "<br>"

        document.getElementById("triangulo").innerHTML = saida;
    }
    
}

function ordenar(numeros){
    // Ordernação Insert(Insertation)
        for(let j = 1 ; j < numeros.length ; j++){
            let x = numeros[j];
            let i;
            for(let i = j - 1 ; i >= 0 && numeros[i] > x ; i--){
                numeros[i+1] = numeros[i];
            }
            numeros[i+1] = x;
        }
        for(let p = 0 ; p < numeros.length ; p ++){
            console.log(numeros[p]+" - ");
        }
}

function tabela(){
    var produtos = [
        ["produto","quantidade","preço"],
        ["calça","45","R$ 150,00"],
        ["blusa","15","R$ 45,00"],
        ["sapato","35","R$ 250,00"]
    ];
let saida = "";

    for(var lin = 0; lin <= 3; lin++){
        for (var col = 0; col <= 2; col++){
            if (lin == 0) {
               saida += "<span class=titulos>" + produtos[lin][col] + "</span>";
             } else {

            saida += "<span>" + produtos[lin][col] + "</span>";
             }

            }
    saida += "<br>"
        }
    document.getElementById("painel").innerHTML = saida;
}