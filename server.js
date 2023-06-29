const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults({
  static: "./build",
});
const cors = require("cors");

server.options("*", cors());

const PORT = process.env.PORT || 8000;
server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);

server.use(router);
server.use(cors());
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
