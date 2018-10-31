var http = require('http')

var server = http.createServer()
server.on('request', function (req, res) {
	res.writeHead(200, {'Content-Types': 'text/plain'})
	res.end('Hello world\n')
})

server.listen(3000)
console.log('Server runing at http://localhost:3000/')