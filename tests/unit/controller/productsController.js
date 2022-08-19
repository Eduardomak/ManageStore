const sinon = require('sinon');
const { expect } = require('chai');
const productsService = require('../../../services/productsService');
const productsController = require('../../../controllers/productsController');

describe('testes da productsController', async () => {

  describe('testes da getAllController', async () => {
    before(() => {
      const products = [[{ id: 1, name: 'Produto1' }, { id: 2, name: 'Produto2' }], []];
      sinon.stub(productsService, 'getAllService').resolves(products);
    });
    after(() => {
      productsService.getAllService.restore();
    });
    it('response = expectedResponse quando os produtos são retornados com sucesso', async () => {

      const req = {};
      const res = {}

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      res.end = sinon.stub().returns();

      const response = await productsController.getAllController(req,res);
      console.log(response);
      expect(res.status.calledWith(200)).to.be.true
    });
  })

});