const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url == '/home') {
        res.write('<html>');
        res.write('<head>Welcome home<title>My Name is Jatin Kumar</title></head>');
        res.write('</html>');
        res.end();
    }
    else if (req.url == '/about') {
        res.write('<html>');
        res.write('<head>Welcome to About Us page<title>My Name is Jatin Kumar</title></head>');
        res.write('</html>');
        res.end();
    }
    else if (req.url == '/node') {
        res.write('<html>');
        res.write('<head>Welcome to my Node Js project<title>My Name is Jatin Kumar</title></head>');
        res.write('</html>');
        res.end();
    }
});
server.listen(4000);