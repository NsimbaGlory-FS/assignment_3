require("dotenv").config({ path: "./.env" }); 

const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

if (!process.env.SECRET) {
    console.error("Secret is missing! Ensure you have a valid .env file with a SECRET environment variable.");
    process.exit(1);
}

const SECRET = process.env.SECRET || "API Key Available"; 
console.log(`Environment: ${process.env.NODE_ENV}`);
console.log(`Using Non shared Key: ${SECRET}`);

let directory_name = "./";
let filenames = fs.readdirSync(directory_name);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  let f = "";
  filenames.forEach((file) => {
    f += `${file}\n`;
  });

  res.end(`${f}.\n Secret: ${SECRET}`);
});

server.listen(port, hostname, ()=>{})

