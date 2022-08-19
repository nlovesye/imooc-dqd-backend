import { getValue } from "@/config/RedisConfig";

// 校验验证码
export async function checkCode(key, value) {
  const redisCode = await getValue(key);
  if (!redisCode) {
    return false;
  }
  return redisCode.toLowerCase() === value.toLowerCase();
}
