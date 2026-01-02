// server.mjs
import pkg from "json-server";
import auth from "json-server-auth";

const { create, router, defaults } = pkg;

const server = create();
const dbRouter = router("data/db.json");
const middlewares = defaults();

server.db = dbRouter.db;

server.use(middlewares);
server.use(auth);
server.use(dbRouter);

server.listen(8000, () => {
  console.log("Auth API running at http://localhost:8000");
});
