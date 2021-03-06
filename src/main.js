import {
  createApp
} from 'vue'
import Nav from './Nav'
import App1 from './App1'
import App2 from './App2'
import App3 from './App3'
import App4 from './App4'
import App5 from './App5'
import Bottom from './Bottom'

createApp(Nav).mount('#nav')
createApp(App1).mount('#app1')
createApp(App2).mount('#app2')
createApp(App3).mount('#app3')
createApp(App4).mount('#app4')
createApp(App5).mount('#app5')
createApp(Bottom).mount('#bottom')