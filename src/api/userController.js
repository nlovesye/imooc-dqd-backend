import moment from "moment";

import sendMail from "../config/MailConfig";

class UserController {
  constructor() {}

  async getUserInfo(ctx) {
    let { body } = ctx.request;
    if (
      !body ||
      typeof body.name === "undefined" ||
      typeof body.email === "undefined"
    ) {
      ctx.status = 404;
      ctx.body = {
        code: 404,
        message: "name与email不得为空",
      };
      return;
    } else {
      if (
        typeof ctx.header.role !== "undefined" &&
        ctx.header.role === "admin"
      ) {
        ctx.body = {
          code: 200,
          data: { ...body },
          message: "上传成功",
        };
        return;
      } else {
        ctx.status = 401;
        ctx.body = {
          code: 401,
          message: "unauthorized post",
        };
      }
    }
  }

  async forget(ctx) {
    try {
      const {
        body: { code, email, userName },
      } = ctx.request;
      const expire = moment().add(30, "minutes").format("YYYY-MM-DD HH:mm:ss");
      const sendInfo = {
        code,
        expire,
        email,
        user: userName,
      };
      const result = await sendMail(sendInfo);
      ctx.body = {
        code: 200,
        data: result,
        message: "邮件发送成功",
      };
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UserController();
