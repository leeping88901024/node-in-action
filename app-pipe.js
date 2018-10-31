var http = require('http')
var fs = require('fs')
var server = http.createServer()
server.on('request', function (req, res) {
	res.writeHead(200, {'Content-Types': 'image/png'})
	// 可读和可写的数据流可以连接成管道，比如response是可写的数据流，这样不用等读完直接写出去。
	fs.createReadStream('./magazine-unlock-01-2.3.1131-_211A988272E926949BCD.jpg').pipe(res)
})

server.listen(3000)
console.log('Server runing at http://localhost:3000/')