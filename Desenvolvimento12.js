//Desenvolvimento 12;
//Aluno: Alex Barros;
//Data: 25/02/2023;



const Sequelize = require('sequelize');
const sequelize = new Sequelize('nomedofilme', 'ano', 'categoria', {
    dialect: 'mysql',
    host: "localhost"
});

sequelize.authenticate().then(() => {
    console.log('Conexão estabelecida com sucesso!');
}).catch((erro) => {
    console.log('Conexão não estabelecida:\n' + erro);
});