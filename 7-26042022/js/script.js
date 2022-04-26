function carregarMake(){
    /* fazer o carregamento da url com maquiagens
    vamos usar o comando fetch para localizar e
    carregar as maquiagens e exibir em página html
    */

    fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
    .then((response)=>response.json())
    .then((dados)=>{

        console.log(dados);

        var saida = "<div id=make>";
        dados.map((item,ix)=>{
            saida+=`
                <div>
                <img src=${item.image_link}>
                <h2>${item.name}</h2>
                <p class=data>${item.product_type}</p>
                <p class=price>${item.price}</p>
                </div>    
            
            `;

        });

        saida+="</div>"

        document.body.innerHTML+= saida;

    })

.catch((erro) => console.error(`Erro ao tentar executar a api -> ${erro}`));
}