// vet inte varför jag la in denna
// const { Router } = require('express');
const router = require('express').Router();
const productModel = require('../models/products/productModel');
const auth = require('../authentication/auth');

// anger endpoints som matchas med API i postman och kan byggas på i '/' eller att det plockas ur en produkt exempel: '/all/products/id'
// vilken endpoint jag vill gå mot och när det görs hämtar vi filen productModel och kör funktionen .getPRoducts
router.get('/', productModel.getProducts);
router.get('/:id', productModel.getOneProduct);

// de tre sista här vill vi begränsa och lägger in aut, token och middelware
// skapar ny produkt i databasen
router.post('/new', auth.verifyToken, productModel.createProduct);

// obs patch funktionen funkar inte än i postman
router.patch('/:id',auth.verifyToken, productModel.updateProduct);

// tar bort produkt från databasen
router.delete('/:id', auth.verifyToken, productModel.deleteProduct);

module.exports = router;