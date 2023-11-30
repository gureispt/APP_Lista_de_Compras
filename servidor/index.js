const express = require('express');
const cors = require('cors');

const server = express();

server.use(express.json(), cors());
/*
    Estrutura das compras
    {
        id: number
        descricao: string
        comprado: boolean
    }
*/

const compras = [];

// CREATE 
server.post('/compras' , (req, res) => {
    const compra = req.body;
    console.log(req.body)
    compras.forEach(c => {
        if(c.id == compra.id){
            res.errored.message = "Já existe uma compra com esse id";
            return res.errored;
        } 
    })
    compras.push(compra);
    return res.json(compras);
});

// GET para uma compra
server.get('/compras/:id', (req, res) => {
    const {id} = req.params;

    compras.forEach(compra => {
        if(compra.id == id) return res.json(compra);
    })
    return res.json();
    
});

// GET para todos os compras
server.get('/compras', (req, res) => {
    return res.json(compras);
});

// UPDATE
server.put('/compras/:id', (req, res) => {
    const {id} = req.params;
    const compra = req.body;

    compras.forEach((c,i) => {
        if(c.id == id){
            compras[i] = compra
            console.log(c)
        } else {
            res.errored.message = 'Compra não encontrada';
            return res.errored;
        }
    })
    return res.json(compras);
});

// DELETE
server.delete('/compras/:id', (req, res) => {
    const {id} = req.params
    compras.forEach((c, i) => {
        if(c.id == id){
            compras.splice(i, 1);
        } else {
            res.errored.message = 'Compra não encontrada';
            return res.errored;
        }
    })
    return res.json({message: 'O item foi deletado'});
});



server.listen(3000, () => console.log("Servidor rodando!"));