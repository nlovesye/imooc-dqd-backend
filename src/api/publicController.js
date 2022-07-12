import svgCaptcha from "svg-captcha";

class PublicController {
  constructor() {}

  async getCaptcha(ctx) {
    const captcha = svgCaptcha.create({});
    ctx.body = {
      code: 200,
      data: captcha,
    };
  }
}

export default new PublicController();
