// Encontrar o maior valor em un array

function maior(numeros){

    // vamos transformar os numeros em numeros
    // realizando um parse para inteiros

    for(var c = 0 ; c < numeros.length ; c++){
        numeros[c] = parseInt(numeros[c]);
    }

    var n = numeros[0];
    for(var i = 1 ; i < numeros.length ; i ++){
        if(numeros[i] > m) {
            m = numeros[i]
        }
    }
    return m;
}

// E ncontra o menor valor em um array

function menor(numeros){
    var n = numeros[0];
    for(var i = 1 ; numeros.length ; i++){
        if(numeros[1] < m ){
            m = numeros[i]
        }
    }
    return m;
}

//  verificar se um campo esta vazio e alertar o usuario

function verificarVazio(controle){
    if(controle.value == "" || controle.value == null){
        alert("O campo " +controle.id+" não pode ser vazio");
        controle.Focus();
    }
}

//  Função data e hora do sistema

function dataehora(){
    return(
        new Date().toLocaleTimeString() + " . " + new Date().toLocaleTimeString()
    );
}