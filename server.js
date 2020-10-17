const app = require('./src/app');
const porta = 8080; 

app.listen(porta, () =>{
    console.log(`Servidor rodando em http://localhost:${porta}`)
})

/*
Blog da Reprograma
Criaremos as API'S para as postagens no Blog da Reprograma.

Dados necessários:

Id: Integer / Números que serão incrementados a cada criação de um novo post.
Data da criação: Date / Data exata da criação do post.
Título: String / O nome do post.
Conteúdo: String / O conteúdo relacionado ao post.
Etiquetas(Tags): Array / Equitetas relacionadas ao post, 
por exemplo: "Artigo", "Mulheres na Tecnologia"

Utilizando os métodos HTTP, crie as seguintes API'S:
1. Criar um post
2. Ao criar o post, o id deverá ser incrementado automaticamente.
3. Deletar um post
4. Lembre-se de utilizar as boas práticas e documentar todas as rotas.

Bônus:
Responda no README.md do seu projeto as perguntas abaixo:
Motivação
Arquitetura
Ferramentas utilizadas
*/