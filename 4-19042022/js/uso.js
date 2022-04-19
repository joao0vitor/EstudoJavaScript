// Verificar qual a pagina que ira abrir este arquivo
//  JavaScript
//  pega a url completa do navegador

var pagina = window.location;
console.log(pagina);

// vamos quebrar a url onde houver barra

pagina = pagina.href.split("/");
console.log(pagina);

// pega o ultimo elemento do array pagina criado acima

pagina = pagina[pagina.length - 1];
console.log(pagina);

if(pagina == "home.html"){
    
    document.body.style.backgroundColor="rgb(150,150,150)";
    
    /*
        acessar a caixa(input) chamada numeros, capturar
        esses numeros e ultilizar a função maior para
        encontrar o maior valor entre eles.
    */

 // diferenciar um elemento de input da tela home
    const txtN = document.getElementById("txtN");

//  aplicar um evento chamdado onblur, ou seja,
//  quando a caixa perder o foco
        txtN.onblur = function(){
    // vamos capturar o valor contido em
    // txtN, ou seja, os números dentro
    // desta caixa e alocar em um array

    var valores = txtN.value.split(",");
    alert(maior(valores));
    };
}
if(pagina=="formulario.html"){
    document.body.style.backgroundColor="rgb(120,200,150)";
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const cpf = document.getElementById("cpf");
    const tel = document.getElementById("tel");

    nome.onblur = ()=>{
        verificarVazio(nome);
    }

    email.onblur = ()=>{
        verificarVazio(email);
    }

    cpf.onblur = ()=>{
        verificarVazio(cpf);
    }

    tel.onblur = ()=>{
        verificarVazio(tel);
    }
}