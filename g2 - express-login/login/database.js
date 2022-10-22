const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test_tb'
})

connection.connect(function(error){
    if(error)
    {
        throw error
    }else
    {
        console.log('Connection established')
    }
})

module.exports = connection