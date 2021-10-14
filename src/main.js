import {
  createApp
} from 'vue'
import Nav from './Nav'
import App1 from './App1'
import App2 from './App2'

createApp(Nav).mount('#nav')
createApp(App1).mount('#app1')
createApp(App2).mount('#app2')