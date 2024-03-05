import DefaultTheme from "vitepress/theme"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import Button from '@/components/Button/Button.vue'
import Icon from '@/components/Icon/Icon.vue'

import '@vitepress-demo-preview/component/dist/style.css'
import '../../../src/styles/index.css'
import './custom.css'

library.add(fas)

// 扩展 DefaultTheme
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('demo-preview', ElementPlusContainer),
    app.component('h-button', Button),
    app.component('h-icon', Icon)
  }
}