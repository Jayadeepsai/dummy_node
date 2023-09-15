const mysql = require('mysql2');



 const connection = mysql.createConnection({
        host: 'onelove.cxb7nmtc66dn.us-east-2.rds.amazonaws.com',
        user: 'onelove',
        password: 'OneloveRone',
        database: 'onelove',
        port: 3306,
      });


connection.connect(function (error) {
    if (error) throw error
    else{
        console.log('connected to mysql database')
    //  var sql = `ALTER TABLE onelove.users
    //  ADD COLUMN image_id INT,
    //  ADD FOREIGN KEY (image_id) REFERENCES onelove.images(image_id),`;
    
    

    // connection.query(sql, (err, result) => {
    //     if (err) throw err;
    //     console.log("Qurey Executed")
    //  })
    }
})



module.exports = connection.promise();


