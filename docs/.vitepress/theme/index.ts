import DefaultTheme from "vitepress/theme"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import '../../../src/styles/index.css'

library.add(fas)

// 添加一些自定义样式就导出，对 DefaultTheme 不做修改
export default DefaultTheme