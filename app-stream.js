var fs = require('fs')

var stream = fs.createReadStream('./magazine-unlock-01-2.3.1131-_211A988272E926949BCD.jpg')
stream.on('data', function (chunk) {
	console.log(chunk)
})
stream.on('end', function () {
	console.log('finished')
})