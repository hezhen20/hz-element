<script setup>
import { ref } from 'vue'
const openedValue = ref(['a'])
</script>

<template>
  <div>
    <h-collapse v-model="openedValue">
      <h-collapse-item name="a" title="Title A">
        <h1>headline title</h1>
        <div> content a</div>
      </h-collapse-item>
      <h-collapse-item name="b" title="Title B">
        <div> content b </div>
      </h-collapse-item>
      <h-collapse-item name="c" title="Title C">
        <div> content c </div>
      </h-collapse-item>
    </h-collapse>
  </div>
</template>