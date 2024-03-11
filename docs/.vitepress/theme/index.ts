import DefaultTheme from "vitepress/theme"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import Button from '@/components/Button/Button.vue'
import Icon from '@/components/Icon/Icon.vue'
import Collapse from '@/components/Collapse/Collapse.vue'
import CollapseItem from '@/components/Collapse/CollapseItem.vue'
import Tooltip from '@/components/Tooltip/Tooltip.vue'

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
    app.component('h-icon', Icon),
    app.component('h-collapse', Collapse),
    app.component('h-collapse-item', CollapseItem),
    app.component('h-tooltip', Tooltip)
  }
}