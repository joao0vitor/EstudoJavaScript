// Objetos e coleções
// Vamos criar uma coleção de nomes

var nomes = ["Paula" , "Henrique" , "Vanessa"];

// usando
for (var i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}

/*
outra forma de ler coleções é usando interações,
neste caso, você pode usar foreach ou map
*/

// nomes.forEach()...
// nomes.map()...

nomes.forEach(saida);

function saida(valor, indice) {
    console.log("Do ForEach valor -> ");
}

// Variação do foreach com a função dentro da estrutura

nomes.forEach(function(valor,indice){
    console.log(valor);
});

// variação do foreach com arrow fuction

nomes.forEach((valor,indice)=>{
console.log("arrow function -> "+valor);
});

// --------------------------- Map ---------------------------------

nomes.map((valor,indice)=>{
    console.log("posição : "+indice+ " nome: "+valor);
});

// vamos criar um objeto chamado cliente
// para a atribuição dos dados dos clientes é importante
// que estes fiquem entre chaves
// esta estrutura é do tipo chave - valor

const endereco = {
    tipo:"Rua",
    logradouro:"Soldado Fernandes",
    numero:"75",
    complemento:"Casa dos fundos",
    bairro:"jardim novo",
};

const cliente = {
    id:1,
    nome:"paula oliveira",
    idade: 25,
    cpf: "2201547854",
    endereco:endereco
};

const prodCalca = {
    id:1,
    nome:"Calça Jeans",
    preco:"R$ 150,00",
};

const prodBlusa = {
    id:2,
    nome:"Blusa de algodão",
    preco:"R$ 50,00",
};

const prodTenis = {
    id:3,
    nome:"Tênis",
    preco:"R$ 250,00",
};

const pedido = {
    id:5514,
    data:"20/04/2022",
    hora:"16:00",
    cliente:cliente,
    produtos:[prodCalca,prodBlusa, prodTenis],
    entrega:endereco
}


console.log("saida do objeto cliente")
console.log(pedido);

const out = document.getElementById("output");

out.innerHTML += `id do pedido: ${pedido.id}`
out.innerHTML += ` <br> nome do cliente: ${pedido.cliente.nome}`

pedido.produtos.map((pr,ix)=>{
    out.innerHTML += `<br> Pedido do Cliente: ${pr.nome}`; 
})

out.innerHTML += ` <br> entregar em : ${pedido.entrega.logradouro}`;