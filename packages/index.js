import message from './message';

// 存储组件列表
const components = [
  message,
]

const install = function(Vue) {
  // 判断是否安装
  if(install.installed) return ;
   // 遍历注册全局组件
   components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
 
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  message
}