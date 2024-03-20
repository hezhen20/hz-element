<script setup lang="ts">
import { ref } from 'vue'

let leftData = ref([
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
let rightData = ref([]);
</script>

<template>
  <div>
    <h-transbox :left-data="leftData" :right-data="rightData" />
  </div>
</template>