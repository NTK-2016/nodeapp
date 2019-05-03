var mysql = require('mysql');

var conn = mysql.createConnection
           (
              {
                  host:'127.0.01:3306',
                  user:'root',
                  password:'',
                  database:'nodejs'
              } 
           );
 conn.connect(function(error){
        // if(error) throw error;
       console.log('Connection established!');
});          
module.exports = conn;