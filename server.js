const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults({
  static: "./build",
});
// const cors = require("cors");

// server.use(
//   cors({
//     origin: true,
//     credentials: true,
//     preflightContinue: true,
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   })
// );

// server.options("*", cors());

const port = process.env.SERVER_PORT || 5001;
server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);

server.use(router),
  server.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
