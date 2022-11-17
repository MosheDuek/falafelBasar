const express = require('express')
const router = express.Router()
const authLead = require('../../middleware/lead.auth')
const { insertFavorite, getFavorite, removeFavorite, getFavorites, getFavoritesId } = require('../../models/favorites')
const { validateInsertGetOrRemoveFavoriteSchema } = require('../../validation/favorite.validation')

router.post("/",authLead,async(req,res)=>{
    try{
        await validateInsertGetOrRemoveFavoriteSchema({idLead:req.leadData.idleads,idProduct:req.body.idProduct})
        const [favorite] = await getFavorite(req.leadData.idleads,req.body.idProduct)
        if(!favorite[0]){
        await insertFavorite(req.leadData.idleads,req.body.idProduct)
        }
        res.end()
    }
    catch(err){
        res.status(400).json(err)
    }
})

router.delete("/:idProduct",authLead,async(req,res)=>{
    try{
        await validateInsertGetOrRemoveFavoriteSchema({idLead:req.leadData.idleads,idProduct:req.params.idProduct})
        await removeFavorite(req.leadData.idleads,req.params.idProduct)
        res.end()
    }
    catch(err){
        res.status(400).json(err)
    }
})

router.get("/id",authLead,async(req,res)=>{
    try{
        const [favorites] = await getFavoritesId(req.leadData.idleads)
        res.json(favorites)
    }
    catch(err){
          res.status(400).json(err)
    }
})

router.get("/",authLead,async(req,res)=>{
    try{
        const [favorites] = await getFavorites(req.leadData.idleads)
        res.json(favorites)
    }
    catch(err){
        res.status(400).json(err)
    }
})

module.exports = router