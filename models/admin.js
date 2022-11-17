const mysql = require("./mySqlPool")

const insertAdmin = (name,email,phoneNumber,hashedPassword)=>{
    return mysql.execute(`
    INSERT INTO admin (name, email, phone_number, hashed_password) VALUES (?, ?, ?, ?)
`,[name,email,phoneNumber,hashedPassword])
}

const getAdmin = (email)=>{
    return mysql.execute(`SELECT * FROM admin WHERE email = ?`,[email])
}

const chaeckIfAdminExist = ()=>{
    return mysql.execute(`SELECT * FROM admin`)
}

const updatePassword = (password,idadmin)=>{
    return mysql.execute(`UPDATE admin SET hashed_password = ? WHERE (idadmin = ?);
`,[password,idadmin])
}

module.exports = {
    insertAdmin,
    getAdmin,
    updatePassword,
    chaeckIfAdminExist
}