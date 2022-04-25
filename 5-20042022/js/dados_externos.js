// script para carregar dados em formato json e
// publicar em um arquivo html.

//  fazer uma referencia do body do documento

const body = window.document.body;

// vamos criar um elemento html no body e exibir
// o titulo na pagina

const h1 = document.createElement("h1");
h1.setAttribute("class","titulo");
h1.innerHTML = "dados online";

// adicionar o h1 ao body do documento
body.appendChild(h1);

const geral = document.createElement("div");
geral.setAttribute("id","geral");

const items = document.createElement("div");
items.setAttribute("class","items");


// vamos usar o comando fetch(buscar) para realizar
// o carregamento dos dados da url.
// com o fetch temos 3 elemntos: then, catch e finally, onde
// then é quand temos um resultado favoravel, catch quando
// temos algum erro e finally quando precisamos encerrar algo
// que passou por then ou catch.
// fetch é uma promisse(promessa) que pode se concretizar com then
// ou nao com o catch.

fetch("https://gbfs.citibikenyc.com/gbfs/en/station_information.json")
.then((response)=>response.json())
.then((dados)=>{
  dados.data.stations.map((info,ix)=>{

    var h2 = document.createElement("h2");
    var p = document.createElement("p");
    h2.innerHTML = info.name;
    p.innerHTML = info.station_type;
    items.appendChild(h2);
    items.appendChild(p);

  });
})
.catch((erro)=>console.error(`Erro ao tentar carregar os dados -> ${erro}`)
);

geral.appendChild(items);
body.appendChild(geral);