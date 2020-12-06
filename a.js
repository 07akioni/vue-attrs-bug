import { renderSlot } from 'vue'

export default {
  name: 'A',
  render () {
    return renderSlot(this.$slots, 'default')
  }
}