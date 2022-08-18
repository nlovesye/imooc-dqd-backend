import svgCaptcha from "svg-captcha";
import { setValue, getValue } from "@/config/RedisConfig";

class PublicController {
  constructor() {}

  async getCaptcha(ctx) {
    const { sid } = ctx.request.query;
    const captcha = svgCaptcha.create({
      size: 4,
      ignoreChars: "0o1il",
      color: true,
      noise: Math.floor(Math.random() * 5),
      width: 150,
      height: 38,
      fontSize: 36,
    });
    // 图片验证码数据超时10分钟
    setValue(sid, captcha.text, 10 * 60);
    const rt = await getValue(sid);
    ctx.body = {
      code: 200,
      data: captcha,
    };
  }
}

export default new PublicController();
