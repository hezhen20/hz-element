<script setup lang="ts">
import { ref } from 'vue'
import TransBox from './components/TransBox/TransBox.vue';
import type {TransItem} from './components/TransBox/types';

let leftData = ref<TransItem[]>([
  { id: 1, label: '深圳' },
  { id: 2, label: '长沙' },
  { id: 3, label: '广州' },
  { id: 4, label: '武汉' },
  { id: 5, label: '杭州' },
  { id: 6, label: '宁波' },
  { id: 7, label: '重庆' },
  { id: 8, label: '成都' },
  { id: 9, label: '上海' },
  { id: 10, label: '香港' },
  { id: 11, label: '澳门' },
  { id: 12, label: '珠海' },
  { id: 13, label: '北京' },
  { id: 14, label: '拉萨' },
]);
let rightData = ref<TransItem[]>([]);
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>
  <div class="contentBox">
    <TransBox :left-data="leftData" :right-data="rightData" />
  </div>
</template>

<style scoped>
.contentBox {
  width: 600px;
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
