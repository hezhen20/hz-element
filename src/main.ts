import './styles/index.css'

import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import Button from '@/components/Button/Button.vue'
import Icon from '@/components/Icon/Icon.vue'

library.add(fas)

const app = createApp(App)
app.mount('#app')

app
.component('HButton', Button)
.component('HIcon', Icon)
