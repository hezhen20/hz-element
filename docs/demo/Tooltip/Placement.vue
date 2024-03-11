<template>
  <div>
    <h-tooltip 
      content="hello tooltip"
      placement="top-start"
    >
      <h-button> top-start </h-button>
    </h-tooltip>
  
    <h-tooltip 
      content="hello tooltip"
      placement="bottom-start"
    >
      <h-button> bottom-start </h-button>
    </h-tooltip>
  
    <h-tooltip 
      content="hello tooltip"
      placement="left-start"
    >
      <h-button> left-start </h-button>
    </h-tooltip>
  
    <h-tooltip 
      content="hello tooltip"
      placement="right-start"
    >
      <h-button> right-start </h-button>
    </h-tooltip>
  </div>
</template>
<style scoped>
.hz-button {
  margin-right: 20px;
}
</style>