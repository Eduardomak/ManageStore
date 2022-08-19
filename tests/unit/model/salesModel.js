const sinon = require('sinon');
const { expect } = require('chai');

const salesModel = require('../../../models/salesModel');
const connection = require('../../../models/connection');

describe('testes da salesModel', async () => {

  describe('9 - Função getAllSales', async () => {

    describe('* As vendas são retornadas com sucesso', async () => {
      before(() => {
        const sales = [[
          {
            saleId: 1,
            date: '2022-08-18T06:07:27.000Z',
            product_id: 1,
            quantity: 2
          },
          {
            saleId: 1,
            date: '2022-08-18T06:07:27.000Z',
            product_id: 2,
            quantity: 2
          }
        ], []];
        sinon.stub(connection, 'execute').resolves(sales);
      });
      after(() => {
        connection.execute.restore();
      });
      it('response = expectedResponse quando as vendas são retornadas com sucesso', async () => {
        const expectedResponse = [
          {
            saleId: 1,
            date: '2022-08-18T06:07:27.000Z',
            product_id: 1,
            quantity: 2
          },
          {
            saleId: 1,
            date: '2022-08-18T06:07:27.000Z',
            product_id: 2,
            quantity: 2
          }
        ];
        const response = await salesModel.getAllSales();
        expect(response).eqls(expectedResponse);
      });
    });

  });
});