<script setup>
const options = [
  { key: 1, label: 'item1'},
  { key: 2, label: 'item2', divided: true },
  { key: 3, label: 'item3', disabled: true  }
]
</script>

<template>
<div>
  <h-dropdown 
    placement="bottom" 
    :menu-options="options"
  >
  <h-button type="primary"> Hover 下拉菜单 </h-button>
  </h-dropdown>
</div>
</template>

<style>
.vp-doc .vitepress-demo-preview-preview ul, .vp-doc .vitepress-demo-preview-preview  ol {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>