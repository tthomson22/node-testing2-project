const db = require('../data/dbConfig')

module.exports = {
    getAll,
    getById,
    insert,
}

function getAll() {
    return db('pokemon')
}

function getById(id) {
    return db('pokemon')
        .where('id', id)
        .first()
}

async function insert(pokemon){
    return db('pokemon')
        .insert(pokemon)
        .then(([id]) => getById(id));
}