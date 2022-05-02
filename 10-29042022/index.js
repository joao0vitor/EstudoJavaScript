const express = require("express");

const mongoose = require("mongoose");

const app = express();

const urldb = "mongodb+srv://Joao-Vitor:abcjoao@joao.0wrpc.mongodb.net/trabalho?retryWrites=true&w=majority";
mongoose.connect(urldb,{useNewUrlParser:true,useUnifiedTopology:true});

app.use(express.json());

const tabela = mongoose.Schema({
    nome:{type:String,require},
    descricao:{type:String,require},
    categoria:{type:String},
    quantidade:{type:Number},
    preco:{type:Number}
});

const produto = mongoose.model("produto",tabela);

const default_route = "/api/produto";

app.get(`${default_route}/listar`, (req,res) =>{
    produto.find().then((dados) =>{
    res.status(200).send({output:dados});
})
    .catch((erro)=>res
        .status(500)
        .send({output: `Erro interno ao processar a consulta -> ${erro}`}));
});

app.post(`${default_route}/cadastrar` , (req,res) =>{
   
    const cli = new produto(req.body);
    cli.save().then((dados) =>{
        res.status(201).send({output: "Cadastro Realizado" , payload:dados})
    }).catch((erro) => console.error(`Erro ao tentar cadastrar ${erro}`));

});

app.put(`${default_route}/atualizar/:id` , (req, res) =>{
    
    produto.findByIdAndUpdate(req.params.id,req.body,
        {new:true},(erro,dados)=> {
        if(erro){
            return res.status(500)
            .send({output: `Não atualizou -> ${erro}`});
        }
        res.status(200).send({output: "Dados atualizados"});
    });
});

app.delete(`${default_route}/apagar/:id`, (req,res) =>{
    produto.findByIdAndDelete(req.params.id, (erro,dados) => {
        if (erro) {
            return res
            .status(500)
            .send({ output: `Erro ao tentar apagar -> ${erro}`});
        }
        res.status(204).send({output: `apagar`});
    });
});

app.listen(5001,
    ()=>console.log("Servidor on-line em http://localhost:5001")
    );