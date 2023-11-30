const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();

server.use(cors());
server.use(bodyParser.json());
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
    compras.forEach(c => {
        if(c.id == compra.id){
            res.errored.message = "Já existe uma compra com esse id";
            return res.errored;
        } 
    })
    compra.forEach(c => {
        compras.push(c);
    })
    
    return res.json(compras);
});

// GET para uma compra
server.get('/compras/:id', (req, res) => {
    const {id} = req.params;

    compras.forEach(compra => {
        if(compras.indexOf(compra) == id) return res.json(compra);
    })
    return res.json();
    
});

// GET para todos os compras
server.get('/compras', (req, res) => {
    return res.json(compras);
});

// UPDATE
server.put('/compras/:id', (req, res) => {
    const { id } = req.params;
    const compra = req.body;

    let compraEncontrada = false;

    compras.forEach((c, i) => {
        if (c.id == id) {
            compras[i] = compra;
            compraEncontrada = true;
            
        }
    });
    if (!compraEncontrada) {
        res.status(404).json({ message: 'Compra não encontrada' });
    } else {
        res.json(compras);
    }
});


// DELETE
server.delete('/compras/:id', (req, res) => {
    const {id} = req.params
    compras.forEach((c, i) => {
        if(c.id == id){
            compras.splice(i, 1);
            compraEncontrada = true;
        }
    })
    if (!compraEncontrada) {
        res.status(404).json({ message: 'Compra não encontrada' });
    } else {
        res.json(compras);
    }
    return res.json({message: 'O item foi deletado'});
}); 
server.listen(3000, () => console.log("Servidor rodando!"));