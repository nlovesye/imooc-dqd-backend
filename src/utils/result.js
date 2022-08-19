export function createResult({ code = 200, msg = "成功!", data = null } = {}) {
  return {
    code,
    msg,
    data,
  };
}
