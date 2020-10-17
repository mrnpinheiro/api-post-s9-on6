const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

/**
@route POST
@desc Criar um post
@access Public 
@endpoint http://localhost:porta/post
**/
router.post('/post', blogController.criarPost);

/**
@route DELETE
@desc Deletar um post
@access Public 
@endpoint http://localhost:porta/post/:id
**/
router.delete('/post/:id', blogController.deletePost);

module.exports = router;