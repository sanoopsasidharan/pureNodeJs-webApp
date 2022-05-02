const http = require("http");
const port = 5000;
const url = require("url");
require("./mongodb/index");
const User = require("./model/UserModel");
const { parse } = require("querystring");
const { createUser } = require("./controller/userController");
const coresAllows = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept",
};

http
  .createServer((req, res) => {
    // let q = url.parse(req.url)
    if (req.url === "/register") {
      res.writeHead(200, coresAllows);
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const { email, password } = parse(body);
        const todos = {
          name: "sanoop",
        };
        createUser(email, password);
        res.end(JSON.stringify(todos));
      });
    } // next is login route
    // @body email password
    // @return user true
    else if (req.url === "/login") {
      res.writeHead(200, coresAllows);
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const { email, password } = parse(body);
        const todos = {
          name: "sanoop",
        };
        createUser(email, password);
        res.end(JSON.stringify(todos));
      });
    } else if (req.url === "/" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write("Hi there, This is a Vanilla Node.js API");
      res.end();
    } else {
      console.log("error router");
      // res.writeHead(405);
      // res.end(`${req.url} is not allowed for the request.`);
    }
  })
  .listen(port, () => console.log(`runing server: ${port}`));
