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
    Estrutura das usuarios
    {
        username: 'caiooliveira',
        senha: 'caio123'
    }
*/

const compras = [];
const usuarios = [
    {username: 'caiooliveira', senha: 'caio123'},
    {username: 'gustavoreis', senha: 'gustavo123 '}
];


//LOGIN
server.post('/compras/login', (req, res) => {
    const login = req.body;
    usuarios.forEach(user => {
        if(login.username == user.username && login.senha == user.senha) return res.json(user)
    })
    res.status(404).json({ message: 'Usuario não encontrado' });
})

// Criar
server.post('/compras' , (req, res) => {
    const compra = req.body;
        let id = compras.length+1;
        compra.id = id
        compras.push(compra);
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

// GET para todas as compras
server.get('/compras', (req, res) => {
    return res.json(compras);
});

// Atualizar
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

// Remover
server.delete('/compras/:id', (req, res) => {
    const {id} = req.params
    compraEncontrada = false
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