module.exports = {
    development: {
        client: 'sqlite3',
        useNullAsDefault: true,
    },
    connection: {
        filename: './data/jokes.db3'
    },
    migrations: { 
        directory: './data/migrations'
    },
    seeds: {
        directory: './data/seeds'
    },
}