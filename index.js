require('dotenv').config();

const http = require('http');

const PORT = process.env.PORT || 4000;

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        res.end(`
            <h1>Bienvenidos al curso</h1>
            <p>Aplicación desplegada correctamente en Render.</p>
        `);
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });

        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log('Aplicacion corriendo en puerto: ' + PORT);
});