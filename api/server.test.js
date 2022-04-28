const db = require('../data/dbConfig')
const server = require('./server')
const request = require('supertest')

const Pokemon = require('./model');

beforeAll(async() => {
    await db.migrate.rollback();
    await db.migrate.latest();
});

beforeEach(async() => {
    await db('pokemon').truncate()
});

afterAll(async() => {
    await db.destroy();
});

test('sanity check', () => {
    expect(1).toBe(1);
})
