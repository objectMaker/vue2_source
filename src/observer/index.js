import { isObject } from "../utils/index.js";
export function observer(vm) {
  //对_data进行遍历
  const data = vm._data;
  //将_data转化为

  defineReactive(data);
}
function defineReactive(target) {
  const keys = Object.keys(target);
  keys.forEach((item) => {
    let value = target[item]; //这里使用闭包实现 获取value和设置value 都是操作同一个变量
    Object.defineProperty(target, item, {
      get() {
        if (isObject(value)) {
          defineReactive(value);
        }
        return value;
      },
      set(newValue) {
        console.log("检测到了设置数据");
        console.log(newValue, isObject(newValue));
        if (isObject(newValue)) {
          console.log("设置新的响应式");
          value = newValue;
          defineReactive(value);
        } else if (value === newValue) {
          return;
        } else {
          value = newValue;
        }
      },
    });
  });
}
