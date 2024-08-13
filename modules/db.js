const mysql = require('mysql');

const db = mysql.createConnection({
    host : 'b1malan70mbgwt86mnte-mysql.services.clever-cloud.com',
    user : 'ulq5m81bcg78z3g5',
    password : 'tNYUsqijv7bFmh9wys8Z',
    database : 'b1malan70mbgwt86mnte',
    port : 3306
});

db.connect((err)=>{
    if(err){
        console.log('Error While Connecting the database...');
        return;
    }
    console.log('Mysql is successfully created...');
})

module.exports = db;
