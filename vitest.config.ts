/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  // 关于测试的配置
  test: {
    globals: true,
    environment: 'jsdom',  // 组件的测试需要 DOM 环境，在 js 中模拟一个 DOM 对象
  }
})