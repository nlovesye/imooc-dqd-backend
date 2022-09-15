import Koa from "koa";
import path from "path";
import helmet from "koa-helmet";
import statics from "koa-static";
import koaBody from "koa-body";
import jsonUtil from "koa-json";
import cors from "@koa/cors";
import compose from "koa-compose";
import compress from "koa-compress";
import jwt from "koa-jwt";

import router from "./routes";
import { JWT_SECRET, API_LISTENING_PORT } from "./config";
import errorHandle from "./middleware/ErrorHandle";

const app = new Koa();

const isDevMode = process.env.NODE_ENV !== "production";

const middleware = compose([
  koaBody(),
  statics(path.join(__dirname, "../public")),
  cors(),
  jsonUtil({ pretty: false, param: "pretty" }),
  helmet(),
  errorHandle,
  jwt({ secret: JWT_SECRET }).unless({
    path: [/^\/public/, /^\/user\/login/, /^\/user\/reg/],
  }),
]);

if (!isDevMode) {
  app.use(compress());
}

app.use(middleware);
app.use(router());

// listening
app.listen(API_LISTENING_PORT, () => {
  console.log(`>>> RESTFUL API listening on port: ${API_LISTENING_PORT}`);
});
