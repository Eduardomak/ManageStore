const sinon = require('sinon');
const { expect } = require('chai');

const productsModel = require('../../../models/productsModel');
const connection = require('../../../models/connection');

describe(' testes da productsModel', async () => {

  describe('1 - Função getAll/', async () => {

    describe('* Os produtos são retornados com sucesso', async () => {
      before(() => {
        const products = [[{ id: 1, name: 'Produto1' }, { id: 2, name: 'Produto2' }], []];
        sinon.stub(connection, 'execute').resolves(products);
      });
      after(() => {
        connection.execute.restore();
      });
      it('response = expectedResponse quando os produtos são retornados com sucesso', async () => {
        const expectedResponse = [{ id: 1, name: 'Produto1'}, { id: 2, name: 'Produto2' }];
        const response = await productsModel.getAll();
        expect(response).eqls(expectedResponse);
      });
    });

    describe('2 - Função getById', async () => {

      describe('* O produto é retornado com sucesso', async () => {
        before(() => {
          const product = [[{ id: 1, name: 'Produto' }], []];
          sinon.stub(connection, 'execute').resolves(product);
        });
        after(() => {
          connection.execute.restore();
        });
        it('response = expectedResponse quando o produto é encontrado com sucesso', async () => {
          const expectedResponse = [{ id: 1, name: 'Produto' }];
          const response = await productsModel.getById(1);
          expect(response).eqls(expectedResponse);
        });
      });

    });

  });
})