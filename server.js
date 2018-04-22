

function start() {
    const http = require('http');//调用http模块

    const hostname = '127.0.0.1';//接口名字
    const port = 3000;//设置端口
    const server = http.createServer((req, res) => {
        console.log("111");//打印两次的原因是访问 http://localhost:3000/ 时尝试读取 http://localhost:3000/favicon.ico
        res.statusCode = 200;//设置http状态码，标志成功连接
        res.setHeader('Content-Type', 'text/plain');//http消息头，设置应答头，html格式
        res.end('Hello World\n');//返回消息

});

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);//在后台打印
});

}
// //nodejs模块中的exports对象，你可以用它创建你的模块。
//
// 例如：（假设这是rocker.js文件）
//
// function abc() {
//     console.log("function abc.");
// }
// exports.test = abc;
// 在另一个文件中你这样引用：
//
// var rocker = require('./rocker.js');
// //在文件引入进来之后调用时记得不要遗漏（）括号；
// rocker.test(); // 'function abc.'
//module.exports.start=start();
console.log(module.exports.start);
//exports.start=start();
console.log("yyyyy");
