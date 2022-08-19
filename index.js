const app = require('./app');
require('dotenv').config();
const errorMid = require('./middlewares/errorMiddleware');
const validateProduct = require('./middlewares/productsMiddleware');

const productsController = require('./controllers/productsController');
const salesController = require('./controllers/salesController');

app.get('/products', productsController.getAllController);
app.get('/products/:id', productsController.getByIdController);
app.post('/products', validateProduct, productsController.postProductController);
app.put('/products/:id', productsController.updateController);
app.delete('/products/:id', productsController.deleteController);

app.get('/sales', salesController.getSalesController);
app.get('/sales/:id', salesController.getSaleById);

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.use(errorMid);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
