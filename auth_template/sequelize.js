const Sequelize = require('sequelize');
const UserModel = require('./models/Users');

const sequelize = new Sequelize('ficha10', 'root', {
    dialect: 'mysql',
    root: 'localhost',
    pool:{
        max:10,
        min:0,
        acquire:300000,
        idle:10000
    }
});

const Users = UserModel(sequelize, Sequelize);


sequelize.authenticate()
    .then(() => {
        console.log("Conection estabilished");
    })
    .catch(err => {
        console.error("No Connection", err);
    });

sequelize.sync({ force: false})
    .then(() => {
        console.log("Tables Created");
    });

module.exports = {
    Users
}