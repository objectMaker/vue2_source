export function observer(vm) {
  //对_data进行遍历
  const data = vm._data;
  function watch(data,target){
    for (let i = 0; i < Object.keys(data).length; i++) {
        const item = Object.keys(data)[i];
        if(typeof item === 'object' && !(item instanceof Array)) {
            //证明这是个对象，进行递归操作
            watch(item,)
        }
        Object.defineProperty(target, item, {
          get() {
            console.log("获取数据");
            return data[item];
          },
          set(value) {
            console.log("设置数据");
            data[item] = value;
          },
        });
      }
  }
  watch(data,vm)
}
