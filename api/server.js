const express = require('express');
const pokemonRouter = require('./router')

const server = express();

server.use(express.json())

server.use('/api/pokemon', pokemonRouter)

server.use('/', (req, res) => {
    res.json({ api: 'up' })
});

module.exports = server;