require('dotenv').config();

const http = require('http');

const PORT = process.env.PORT || 4000;

const server = http.createServer((req, res) => {

    console.log(`${req.method} ${req.url}`);

    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Despliegue Node.js</title>
        </head>
        <body>
            <h1>Bienvenidos al curso</h1>
            <p>Aplicación desplegada correctamente en Render.</p>
        </body>
        </html>
    `);
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Aplicación corriendo en puerto ${PORT}`);
});