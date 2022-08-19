const sinon = require('sinon');
const { expect } = require('chai');
const productsModel = require('../../../models/productsModel');
const productsService = require('../../../services/productsService');

describe('testes da productsService', async () => {

  describe('1 - testes da getAllService', async () => {
    before(() => {
      const products  = [
        { id: 1, name: 'Martelo de Thor' },
        { id: 2, name: 'Traje de encolhimento' },
        { id: 3, name: 'Escudo do Capitão América' },
      ];
      sinon.stub(productsModel, 'getAll').resolves(products);
    });
    after(() => {
      productsModel.getAll.restore();
    });

    it('response = expectedResponse quando os produtos são retornados com sucesso', async () => {
      const expectedResponse = [
        { id: 1, name: 'Martelo de Thor' },
        { id: 2, name: 'Traje de encolhimento' },
        { id: 3, name: 'Escudo do Capitão América' },
      ];
      const response = await productsService.getAllService();
      expect(response).eqls(expectedResponse);
    });
    
  })

});