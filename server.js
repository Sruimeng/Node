const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log("111");//打印两次的原因是访问 http://localhost:3000/ 时尝试读取 http://localhost:3000/favicon.ico
    res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello World\n');

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});