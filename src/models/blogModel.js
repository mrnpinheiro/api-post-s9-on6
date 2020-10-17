const helper = require('../helpers/helper');

const posts = [
  { 
    id: 1,
    dataCriacao: helper.novaData(),
    titulo: "Post 1 - {reprograma}",
    conteudo: "Primeiro post teste do blog da {reprograma}.",
    tag: ["tag1", "tag2", "tag3"]
  },
  { 
    id: 2,
    dataCriacao: helper.novaData(),
    titulo: "Post 2 - {reprograma}",
    conteudo: "Segundo post teste do blog da {reprograma}.",
    tag: ["tag1", "tag2", "tag3"]
  }
];

module.exports = posts;