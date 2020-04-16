var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'text/html'});

    var url = req.url;

    if(url === '/contact'){
        res.write("<h1>Contacto</h1>");
        res.end();
    } else if(url === '/about') {
        res.write("<h1>Acerca de</h1>");
        res.end();
    } else {
        res.write("<h1>Bienvenido</h1>");
        res.end();
    }

    
    res.end();
}).listen(3000,function(){
    console.log("servidor escuchando en puerto 3000")
});