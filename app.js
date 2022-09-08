const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Jatin Kumar');
    res.write('<head>Jatin Kumar</head>');
});
server.listen(4000);