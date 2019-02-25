var http = require('http');
const sql = require('mssql')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  
var con = sql.createConnection({
  host: "PCISRV1\PCIIMS",
  user: "ADM_PCI",
  database: "JNSPCIERP",
  password: "R3v0lv#r"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
});

connection.query('select * from dbo.usuarioGet', function(err, results){
	res.send(results);    
});  


}).listen(8080);