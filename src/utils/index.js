export function isObject(target) {
  return typeof target === "object" && target !== null;
}
export function isArray(target) {
  return isObject(target) && target instanceof Array;
}

