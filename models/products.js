const mysql = require("./mySqlPool")

const insertProduct = (name,description,shortDescription,img_link,price)=>{
    return mysql.execute(
        `INSERT INTO products (name, description, short_description, img_link ,price) VALUES (?, ?, ?, ?, ?);
`,[name,description,shortDescription,img_link,price]
    )
}

const updateProduct = (name,description,shortDescription,price,img_link,idProduct)=>{
    return mysql.execute(
        `UPDATE products SET name = ?, description = ?, short_description = ?, price = ? , img_link = ? WHERE (idproducts = ?);

`,[name,description,shortDescription,price,img_link,idProduct]
    )
}

const updateProductNoImg = (name,description,shortDescription,price,idProduct)=>{
    return mysql.execute(
        `UPDATE products SET name = ?, description = ?, short_description = ?, price = ?  WHERE (idproducts = ?);

`,[name,description,shortDescription,price,idProduct]
    )
}

const deleteProduct = (id)=>{
    return mysql.execute(`
    DELETE FROM products WHERE (idproducts = ?);

    `,[id])
}

const getAllProducts = ()=>{
    return mysql.execute(`
    SELECT idproducts,name,short_description,img_link,price FROM products;
    `)
}

const getProduct = (id)=>{
    return mysql.execute(`
   SELECT * FROM products WHERE idproducts = ?
    `,[id])
}

const updatePrice = (price,id)=>{
    return mysql.execute(`
    UPDATE products SET price = ? WHERE (idproducts = ?);
    `,[price,id])
}



module.exports = {
    insertProduct,
    updateProduct,
    deleteProduct,
    getAllProducts,
    getProduct,
    updatePrice,
    updateProductNoImg,
}