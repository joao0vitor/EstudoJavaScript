// importação do módulo do express
const express = require('express');

// realizar a aplicação da função do express
// em uma variavel de aplicativo
const app = express();

app.get('/', (req, res) => {
    res.send("Olá, Bem vindo!");
});

// permitir com que o servidor receba dados
// no formato de json
app.use(express.json());








const cliente = [
    {
        id: 12,
        nome: "Helena",
        idade:18,
    },
    {
        id: 45,
        nome: "Miguel",
        idade:15,
    }
]





// rota para clientes
app.get("/api/clientes/listar", (req, res) => {
    res.status(200).send({output: cliente});
});

// cadastrar novos clientes
app.post("/api/clientes/cadastrar", (req, res) => {
    cliente.push(req.body);
    res.status(201).send({output: "Cliente cadastrado"});
})


app.listen(5000, () => console.log("http://localhost:5000"));
