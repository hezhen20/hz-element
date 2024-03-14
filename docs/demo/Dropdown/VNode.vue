<script setup>
import { h } from 'vue'
const options = [
  { key: 1, label: 'item1'},
  { key: 2, label: 'item2', divided: true },
  { key: 3, label: 'item3', disabled: true },
  { key: 4, label: h('b', 'this is bold') },
]
</script>

<template>
<div>
  <h-dropdown 
    placement="bottom" 
    :menu-options="options"
    trigger="click"
  >
  <h-button type="primary"> 点击下拉菜单 </h-button>
  </h-dropdown>
</div>
</template>