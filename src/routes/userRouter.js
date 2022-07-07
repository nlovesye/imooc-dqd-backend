import Router from "koa-router";
import userController from "../api/userController";

const router = new Router();

router.prefix("/api");
router.post("/user", userController.getUserInfo);

export default router;
