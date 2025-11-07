const {Sequelize} = require('sequelize') // Это деструктуризация. Берем только класс Sequelize из всего пакета, где много всего хранится

// Каждый файл в ноде - это модуль
// module.exports - это то, что модуль отдает наружу для того, чтобы взять отданное через require('db')
module.exports = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)