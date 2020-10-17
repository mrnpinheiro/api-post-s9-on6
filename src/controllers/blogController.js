let postModel = require('../models/blogModel');
const helper = require('../helpers/helper');

const criarPost = (request, response) =>{
    const {titulo, conteudo, tag} = request.body;
    const newPost = {
      id:  helper.obterNovoValor(postModel),
      dataCriacao: helper.novaData(postModel),
      titulo: titulo,
      conteudo: conteudo,
      tag: tag
    }

    postModel.push(newPost);
 
    response.status(201).json(postModel);
}

const deletePost = (request, response) =>{
    const { id } = request.params;
    const postFiltrado = postModel.filter(posts => {
    return posts.id == id;
    })[0];
    
    const index = postModel.indexOf(postFiltrado);
    postModel.splice(index, 1)
    response.json(postModel)
}

module.exports ={
    criarPost,
    deletePost
  }