const {Basket, BasketDevice, Device} = require("../models/models");
const ApiError = require('../error/apiError')
class BasketController {
    async getItems(req, res, next) {
        const {id} = req.user

        try {
            const basket = await Basket.findOne({
                where: {userId: id},
                include: [{
                    model: BasketDevice,
                    include: [{
                        model: Device
                    }]
                }]
            })
            return res.json({basket})
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }

    async addItem(req, res, next) {
        const {deviceId} = req.body
        const {id} = req.user

        try {
            const basket = await Basket.findOne({where: {userId: id}})

            let basketDevice = await BasketDevice.findOne({where: {basketId: basket.id, deviceId: deviceId}})

            if (!basketDevice) {
                basketDevice = await BasketDevice.create({
                    basketId: basket.id,
                    deviceId: deviceId
                })
            } else {
                basketDevice.quantity += 1
                await basketDevice.save()
            }

            return res.json({basketDevice})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }

    async deleteItem(req, res, next) {
        const {id} = req.user
        const {basketDeviceId} = req.body

        try {
            const basket = await Basket.findOne({where: {userId: id}})
            const device = await BasketDevice.destroy({where: {id: basketDeviceId, basketId: basket.id}})

            return res.json({device})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new BasketController()