import {initState} from './initState.js'
export function init(Vue) {
  Vue.prototype._init = function (options) {
    this.$options = options;
    const vm = this;
    initState(vm)
  };
}
