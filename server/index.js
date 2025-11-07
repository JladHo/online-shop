require('dotenv').config() // загрузка перемнных окружения из файла .env в объект process.env. Сам объект создается в ОЗУ при запуске
const express = require('express') // создаем объект экспресса
const sequelize = require('./db') // подключаем БД
const models = require('./models/models') // Импортируем все модели
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5000 //Берем порт

const app = express() // создаем экспресс-приложение
app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use(errorHandler) // Мидлвейр по обработке ошибок в самом конце!

// Функция для запуска приложения. Обязательно делаем ее асинхронной, так как в ней содержится работа с БД
// все, что связано с БД - асинхронное
const start = async () => {
    try {
        await sequelize.authenticate() // подключение к БД 
        await sequelize.sync() // сверяет состояние БД со схемой данных
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`)) // Запуск приложения
    } catch (e) {
        console.log(e)
    }
}

start()
