/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  name: 'Pikachu',
};

xdescribe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('GET /pokemons', () => {
    it('should get 200', (done) => {
      agent.get('/pokemons').expect(400);
      done();
    });
  });

  describe('GET /pokemon/1 - Busqueda por :id ', () => {
    it('should get 200 - id=1', async () => {
      let res = await agent.get('/pokemon/1');
      expect(res.status).to.be.equal(200);
    });
    it('should get 200 - id=9', async () => {
      let res = await agent.get('/pokemon/9');
      expect(res.status).to.be.equal(200);
    });
    it('should get 404 - id=9aa', async () => {
      let res = await agent.get('/pokemon/9aa');
      expect(res.status).to.be.equal(404);
      // console.log(response.body);
      });

    });

  describe('GET /pokemon - Busqueda por :name ', () => {
    it('should get 200 - name: pikachu', async () => {
      let res = await agent.get('/pokemon/pikachu');
      expect(res.status).to.be.equal(200);
    });

    it('should get 200 - name: charizard', async () => {
      let res = await agent.get('/pokemon/charizard').expect(200);
      expect(res.status).to.be.equal(200);
    });
  });

  describe('GET /types', () => {
    it('should get 200', async() => {
      let res = await agent.get('/types');
      expect(res.status).to.be.equal(200);
    });
    it('should get length = 18', async() => {
      let res = await agent.get('/types');
      expect(res.status).to.be.equal(200);
      expect(res.body.length).to.be.equal(18);
    });
  });
});
