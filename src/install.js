// 引入组件
import HelloWorld from '@/components/HelloWorld'
import filter from '@/filter' // 过滤器
import directive from '@/directive' // 指令

// 定义对象
const install = {
  install: (Vue) => {
    Vue.component('HelloWorld', HelloWorld)
    Object.keys(filter).forEach(key => {
      Vue.filter(key, filter[key])
    })
    Object.keys(directive).forEach(key => {
      Vue.directive(key, directive[key])
    })
  }
}
// 导出
export default install

