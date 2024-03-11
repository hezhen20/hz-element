<template>
  <div>
    <h-tooltip
      trigger="click"
    >
      <h-button> 复杂 HTML 结构的Tooltip </h-button>
      <template #content>
        <h3> this is the title</h3>
        <p> this is the content </p>
      </template>
    </h-tooltip>
  </div>
</template>