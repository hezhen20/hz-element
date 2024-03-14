<script setup>
import { h, ref } from 'vue'
const options = [
  { key: 1, label: h('b', 'this is bold') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4' }
]
const tooltipRef = ref()
const open = () => {
  tooltipRef.value?.show()
}
const close = () => {
  tooltipRef.value?.hide()
}
</script>
<template>
<div>
  <h-dropdown 
    placement="bottom" 
    :menu-options="options"
    trigger="click"
    manual
    ref="tooltipRef"
  >
    <h-button> 菜单容器 </h-button>
  </h-dropdown>
  <br/><br/>
  <h-button type="primary" @click="open"> 点击手动触发显示 </h-button>
  <h-button type="danger" @click="close"> 点击手动触发隐藏 </h-button>
</div>
</template>