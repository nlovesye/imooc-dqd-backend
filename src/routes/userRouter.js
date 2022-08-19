import Router from "koa-router";
import userController from "../api/userController";

const router = new Router();

router.prefix("/user");

router.post("/forget", userController.forget);
router.post("/getUserInfo", userController.getUserInfo);
router.post("/login", userController.login);

export default router;
