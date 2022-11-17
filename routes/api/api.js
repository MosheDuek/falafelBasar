const express = require("express");
const router = express.Router()

const authAdminRouter = require('./authAdmin')
const authLeadRouter = require('./authLead')
const favoritesRouter = require('./favorites')
const messagesRouter = require('./messages')
const productsRouter = require('./products')
const leadsRouter = require('./leads')

router.use("/admin",authAdminRouter)
router.use("/lead",authLeadRouter)
router.use("/favorites",favoritesRouter)
router.use("/messages",messagesRouter)
router.use("/products",productsRouter)
router.use("/leads",leadsRouter)

module.exports = router

