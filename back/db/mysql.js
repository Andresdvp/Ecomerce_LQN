const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'lo_que_necesitas'
})

// Conectar a la base de datos
connection.connect(err => {
  if (err) {
    console.error('Error de conexión :', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
    connection.end();
  };
});


/// probando base de datos
connection.query('Select *from productos',(err,rows) =>{

  if(err){
    console.log('datos se perdieronn');
  }else{
    console.log('los datos son : ', rows);

  }

})
