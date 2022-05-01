const http = require("http");

const server = http.createServer((req, res) => {
  console.log("sanoop");
  console.log("sanoop");
  //   res.sendDate("sanoop");
});

server.listen(5000, () => {
  console.log("server started in port 5000");
});
