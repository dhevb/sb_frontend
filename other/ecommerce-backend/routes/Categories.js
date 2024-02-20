const express = require('express');
const router = express.Router();
const { fetchCategories, createCategory } = require('../controller/Category');


//  /categories is already added in base path
router.get('/', fetchCategories)
      .post('/',createCategory)

exports.router = router;