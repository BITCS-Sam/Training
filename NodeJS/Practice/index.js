import http from "http"
import fs from "fs"

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        res.end('<h1>Hello World</h1>');
    } else if (req.url === "/about") {
        res.end('<h1>About Page</h1>');
    } else if (req.url === "/contact") {
        res.end('<h1>Contact Page</h1>');
    } else if (req.url === "/boot") {
        const data = fs.readFileSync("./index.html");
        res.end(data.toString())

    } else {
        res.statusCode = 404;
        res.end('<h1>404 Page Not Found</h1>');
    }
})

server.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})