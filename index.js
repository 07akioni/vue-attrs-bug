import { createApp, h } from 'vue'
import B from './b'

const app = {
  render () {
    return h(B, {
      class: 'b'
    })
  }
}

createApp(app).mount('#app')
