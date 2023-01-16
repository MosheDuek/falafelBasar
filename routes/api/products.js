const express = require('express')
const router = express.Router()
const authAdmin = require("../../middleware/admin.auth")
const { getAllProducts, getProduct, deleteProduct, updatePrice, insertProduct, updateProduct, updateProductNoImg, getHomeProducts, getNames, getProductsCheapToExp, getProductsExpToCheap } = require('../../models/products')
const { validateDeleteOrGetSchema, validateUpdatePriceSchema, validateInsertOrUpdatateProductSchema } = require('../../validation/products.validation')
const fs = require("fs").promises;
const multer = require("../../config/multerTypes");
const uploadMulter = multer.createMulter("uploads/", 3000000, {
  type: multer.allowedTypes.img,
});

router.post("/",authAdmin,uploadMulter.single("prudImg"),async(req,res)=>{
    try{
        delete req.body.prudImg
        const validateValue = await validateInsertOrUpdatateProductSchema(req.body)
        await insertProduct(validateValue.name,validateValue.description,validateValue.shortDescription,req.file.filename,validateValue.price)
        res.end()
    }
    catch(err){
        if(req.file){
        fs.unlink(req.file.path)
        }
        res.status(400).json(err)
    }
})
router.put("/:idProduct",authAdmin,uploadMulter.single("prudImg"),async(req,res)=>{
    try{
        if(req.body.prudImg){
         delete req.body.prudImg
        }
         const validateValue = await validateInsertOrUpdatateProductSchema(req.body)
         if(req.file){
         await updateProduct(validateValue.name,validateValue.description,validateValue.shortDescription,validateValue.price,req.file.filename,req.params.idProduct)
         }
         else{
            await updateProductNoImg(validateValue.name,validateValue.description,validateValue.shortDescription,validateValue.price,req.params.idProduct)
         }
         res.end()
    }
    catch(err){
        res.status(400).json(err)
    }
    
})

router.put("/price",authAdmin,async(req,res)=>{
     try{
        await validateUpdatePriceSchema(req.body)
        await updatePrice(req.body.price,req.body.idProduct)
        res.end()
    }
    catch(err){
        res.status(400).json(err)
    }
})

router.delete("/:idProduct",authAdmin,async(req,res)=>{
     try{
        await validateDeleteOrGetSchema({ idProduct:req.params.idProduct})
        await deleteProduct(req.params.idProduct)
        res.end()
    }
    catch(err){
        res.status(400).json(err)
    }
})

router.get("/",async(req,res)=>{
     try{
        const [products] = await getAllProducts()
        res.json(products)
    }
    catch(err){
        res.status(400).json(err)
    }
})

router.get("/cheap-to-exp",async(req,res)=>{
    try{
        const [products] = await getProductsCheapToExp()
        res.json(products)
    }
    catch(err){
        res.status(400).json(err)
    }
})

router.get("/exp-to-cheap",async(req,res)=>{
    try{
        const [products] = await getProductsExpToCheap()
        res.json(products)
    }
    catch(err){
        res.status(400).json(err)
    }
})

router.get("/home",async(req,res)=>{
     try{
        const [products] = await getHomeProducts()
        res.json(products)
    }
    catch(err){
        res.status(400).json(err)
    }
})

router.get("/names",async(req,res)=>{
    try{
        const [names] = await getNames()
        res.json(names)
    }
    catch(err){
        console.log(err);
        res.status(400).json(err)
    }
})

router.get("/:idProduct",async(req,res)=>{
     try{
        await validateDeleteOrGetSchema({idProduct:req.params.idProduct})
        const [product] = await getProduct(req.params.idProduct)
        res.json(product)
    }
    catch(err){
        res.status(400).json(err)
    }
})

module.exports = router