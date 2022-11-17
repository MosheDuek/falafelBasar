const mysql = require("./mySqlPool")

const insertFavorite = (idLead,idProduct)=>{
    return mysql.execute(`INSERT INTO favorites (idlead, idproduct) VALUES (?,?);
`,[idLead,idProduct])
}

const getFavorite = (idLead,idproduct)=>{
    return mysql.execute(`SELECT * FROM favorites WHERE idlead = ? AND idproduct = ?`,[idLead,idproduct])
}

const getFavorites = (idlead)=>{
    return mysql.execute(`
    SELECT idproducts,name,short_description,img_link,price FROM favorites
inner join products on favorites.idproduct = products.idproducts
where idlead = ?
`,[idlead])
}

const removeFavorite = (idlead,idProduct)=>{
    return mysql.execute(`
    DELETE FROM favorites WHERE idlead = ? AND idproduct = ?
    `,[idlead,idProduct])
}

const getFavoritesId = (idlead)=>{
    return mysql.execute(`
    SELECT idproduct FROM favorites where idlead = ?
`,[idlead])
}

module.exports = {
    insertFavorite,
    getFavorites,
    removeFavorite,
    getFavorite,
    getFavoritesId
}