const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    const body = [];
    if (url === '/') {
        fs.readFile('./message.text', { encoding: 'utf-8' }, (err, data) => {
            if (err) {
                console.log(err);
            }
           else{
            console.log('data in file is ' + data);
            res.write('<html>');
            res.write(`<head>${data}</head>`);
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
            res.write('</html>');
            return res.end();
     } });

    }
    else if (url === '/message' && method === 'POST') {
        req.on('data', (chunks) => {
            body.push(chunks);

        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            message = parsedBody.split('=')[1];
            fs.writeFile('message.text', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });

        });



    }
    // res.setHeader('Content-type', 'text/html');
    // res.write('<html>');
    // res.write('<head>Enter Message</head><body><p>This outside the /<p></body>');
    // res.write('</html>');
    // res.end();


});
server.listen(4000);