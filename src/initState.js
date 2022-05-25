import { observer } from "./observer/index.js";
export function initState(vm) {
  //初始化props
  const opts = vm.$options;
  if (opts.props) {
    initProps();
  }
  if (opts.data) {
    initData();
  }

  function initProps() {
    vm.props = opts.props;
  }
  function initData() {
    vm._data = typeof opts.data === "function" ? opts.data.call(vm) : opts.data;
    observer(vm);
  }
  //实现对象的数据劫持
}
