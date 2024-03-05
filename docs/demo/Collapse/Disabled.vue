<script setup>
import { ref } from 'vue'
const openedValue = ref(['a'])
</script>

<template>
  <div>
    <h-collapse v-model="openedValue" accordion>
      <h-collapse-item name="a" title="Title A">
        <div> content a</div>
      </h-collapse-item>
      <h-collapse-item name="b" title="Disabled B" disabled>
        <div> content b </div>
      </h-collapse-item>
    </h-collapse>
  </div>
</template>