import { createClient } from "redis";
import { promisifyAll } from "bluebird";

import { REDIS } from "./index";

const options = {
  host: REDIS.host,
  port: REDIS.port,
  password: REDIS.password,
  detect_buffers: true,
};

const client = promisifyAll(createClient(options));

client.on("error", (err) => {
  console.log("redis client Error:", err);
});

// client.del('msg')

client.getAsync("msg").then((msg) => {
  console.log("msg", msg);
});

// client.setAsync("msg", "hello");
