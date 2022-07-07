import combineRouters from "koa-combine-routers";
import userRouter from "./userRouter";

const router = combineRouters(userRouter);

export default router;
