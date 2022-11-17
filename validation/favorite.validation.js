const Joi = require("joi");

const idLeadRole = {
    idLead:Joi.number().min(1).max(100000000).required(),
}
const idProductRole = {
    idProduct:Joi.number().min(1).max(100).required()
}

const insertOrRemoveFavoriteSchema = Joi.object({
    ...idLeadRole,
    ...idProductRole,
})


const validateInsertGetOrRemoveFavoriteSchema = (data)=>{
    return insertOrRemoveFavoriteSchema.validateAsync(data,{abortEarly:false})
}


module.exports = {
    validateInsertGetOrRemoveFavoriteSchema,
    idLeadRole,
    idProductRole
}