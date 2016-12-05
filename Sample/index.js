var http = require('http');
var server = http.createServer(function (req, res) {
    res.write(200);
    res.write('<h1>Hello Sample</h1>');
    res.end();
});
server.listen(3000, 'localhost', function (){
    console.log('Server running at http://'+server.address().address+':'+server.address().port);
});
