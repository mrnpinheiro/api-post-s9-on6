# Tarefas

### Blog da {reprograma}

O projeto é destinado para criar um novo post ou deletar já existentes a partir do id, utilizando boas práticas e estrutura de pastas, seguindo o design MVC. 

# Motivação

Aprender os conceitos de POST e DELETE, integrantes dos métodos HTTP.

# Arquitetura 

 📁 api
   |-  📁 src
   |    |- 📁 controllers
            |- 📄 blogControllers.js
   |    |- 📁 helpers
            |- 📄 helper.js
   |    |- 📁 models
            |- 📄 blogModel.js
   |    |- 📁 routes
   |        |- 📄 blogRoute.js
   |    |- 📄 app.js
   |- 📄 package.json
   |- 📄 package-lock.json
   |- 📄 server.js
   |- 📄 .gitignore
   |- 📄 README.md

![Arquitetura do projeto](arquitetura.png)

# Ferramentas utilizadas

* Nodejs
* Expressjs
* Cors
* Nodemon