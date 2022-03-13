const mysql = require('mysql');
var connection = mysql.createConnection({
    host:"localhost",
    user:"root1",
    password:"root",
    database:"crud"
})

connection.connect((err)=>{
    if(!err){
        console.log("connected")
    }
    else{
        console.log(err);
    }
});

module.exports = connection;