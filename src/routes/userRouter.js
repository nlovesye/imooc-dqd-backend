import Router from "koa-router";
import userController from "../api/userController";

const router = new Router();

router.prefix("/user");

router.post("/getUserInfo", userController.getUserInfo);
router.post("/forget", userController.forget);

export default router;
