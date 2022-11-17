const Joi = require("joi")
const { idProductRole } = require("./favorite.validation")

const nameRole = {
    name:Joi.string().min(2).max(50).required()
}
const descriptionRole = {
    description: Joi.string().min(50).max(5000).required()
}
const shortDescriptionRole = {
    shortDescription: Joi.string().min(10).max(255).required()
}
const priceRole = {
    price:Joi.number().min(Number.MIN_VALUE).max(10000).required()
}

const insertOrUpdatateProductSchema = Joi.object({
    ...nameRole,
    ...descriptionRole,
    ...shortDescriptionRole,
    ...priceRole
})

const updatePriceSchema = Joi.object({
    ...priceRole,
    ...idProductRole
})

const deleteOrGetSchema =Joi.object({
    ...idProductRole
})

const validateInsertOrUpdatateProductSchema = (data)=>{
    return insertOrUpdatateProductSchema.validateAsync(data,{abortEarly:false})
}

const validateUpdatePriceSchema = (data)=>{
    return updatePriceSchema.validateAsync(data,{abortEarly:false})
}

const validateDeleteOrGetSchema = (data)=>{
    return deleteOrGetSchema.validateAsync(data,{abortEarly:false})
}

module.exports = {
    validateInsertOrUpdatateProductSchema,
    validateUpdatePriceSchema,
    validateDeleteOrGetSchema,
}