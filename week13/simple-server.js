const http = require('http')

const server = http.createServer((req, res) => {
    // Send response
    res.end('<h1>welcome to my server</h1>')
    if(req.url==http){
        res.setHeader("Content-Type", "text/html");
    }
})

server.listen(3000, 'localhost', () => {
    console.log('Server is listening at localhost on port 3000')
})