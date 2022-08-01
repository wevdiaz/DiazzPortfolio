const express = require("express");
const nunjucks = require("nunjucks");
const server = express();
const routes = require("./routes/routes");

server.use(express.static("public"));
server.use(routes);

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: true,
  noCache: true
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
  console.log("working server now!");
});
