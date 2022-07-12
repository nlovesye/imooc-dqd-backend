import combineRouters from "koa-combine-routers";
import userRouter from "./userRouter";
import publicRouter from "./publicRouter";

const router = combineRouters(userRouter, publicRouter);

export default router;
