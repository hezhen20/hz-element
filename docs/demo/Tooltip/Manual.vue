<template>
  <div>
    <h-tooltip 
      content="hello tooltip"
      ref="tooltipRef"
      manual
    >
      <h-button> 手动容器 </h-button>
    </h-tooltip>
    <br/><br/>

    <h-button type="primary" @click="open"> 手动打开 </h-button>
    <h-button type="danger" @click="close"> 手动隐藏 </h-button>
  </div>
  </template>

<script setup>
import { ref } from 'vue'

const tooltipRef = ref()
const open = () => {
  tooltipRef.value?.show()
}
const close = () => {
  tooltipRef.value?.hide()
}
</script>