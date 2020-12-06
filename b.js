import { h } from 'vue'
import A from './a.js'

export default {
  name: 'B',
  render () {
    return h(A, null, {
      default () {
        return h('div', null, ['B'])
      }
    })
  }
}