<script setup lang="ts">
import { ButtonInstance } from './components/Button/types'
import { TooltipInstance } from './components/Tooltip/types'
import type { Options } from '@popperjs/core'
import Button from './components/Button/Button.vue'
import Collapse from './components/Collapse/Collapse.vue'
import Tooltip from './components/Tooltip/Tooltip.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
import { ref, onMounted } from 'vue'

const buttonRef = ref<ButtonInstance | null>(null)
const tooltipRef = ref<TooltipInstance | null>(null)
const openedArr = ref(['a'])
const trigger = ref('hover')
const tooltipOpts: Partial<Options> = { placement: 'right-end', strategy: 'fixed' }

onMounted(() => {
  console.log(buttonRef.value?.ref)
  // setTimeout(() => {
  //   trigger.value = 'hover'
  // }, 3000);
})
</script>

<template>
  <header>
    <Tooltip content="hello" :trigger="trigger" placement="right" ref="tooltipRef" :popper-options="tooltipOpts">
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    </Tooltip>
  </header>
  <header>
    <Tooltip content="test delay" trigger="hover" placement="right" :open-delay="1000" :close-delay="1000">
      <div style="width: 100px; height: 100px;"></div>
    </Tooltip>
  </header>
  <main>
    <h1>Button</h1>
    <div>
      <Button @click="() => {tooltipRef?.show()}"> hello </Button>
      <Button type="primary" @click="() => {tooltipRef?.hide()}"> Primary </Button>
      <Button type="success"> Success </Button>
      <Button type="warning"> Warning </Button>
      <Button type="danger"> Danger </Button>
      <Button type="info"> Info </Button>
    </div>
    <br>
    <div>
      <Button plain> hello </Button>
      <Button type="primary" plain> Primary </Button>
      <Button type="success" plain> Success </Button>
      <Button type="warning" plain> Warning </Button>
      <Button type="danger" plain> Danger </Button>
      <Button type="info" plain> Info </Button>
    </div>
    <br>
    <div>
      <Button round> hello </Button>
      <Button type="primary" round> Primary </Button>
      <Button type="success" round> Success </Button>
      <Button type="warning" round> Warning </Button>
      <Button type="danger" round> Danger </Button>
      <Button type="info" round> Info </Button>
    </div>
    <br>
    <div>
      <Button disabled> hello </Button>
      <Button type="primary" disabled> Primary </Button>
      <Button type="success" disabled> Success </Button>
      <Button type="warning" disabled> Warning </Button>
      <Button type="danger" disabled> Danger </Button>
      <Button type="info" disabled> Info </Button>
    </div>
    <br>
    <div>
      <Button size="large"> Large </Button>
      <Button type="primary"> 普通 </Button>
      <Button type="success" size="small"> Small </Button>
    </div>
    <br>
    <div>
      <Button circle> <h-icon icon="star" /> </Button>
      <Button type="primary" circle>   <h-icon icon="star" /> </Button>
      <Button type="success" circle> <h-icon icon="star" /> </Button>
      <Button type="warning" circle> <h-icon icon="star" /> </Button>
      <Button type="danger" circle> <h-icon icon="star" /> </Button>
      <Button type="info" circle> <h-icon icon="star" /> </Button>
      <Button icon="star"> Star Button </Button>
      <Button loading> Loading </Button>
    </div>
    <br>
    <h1>Collapse</h1>
    <Collapse v-model="openedArr">
      <CollapseItem name="a" title="Title A">
        <h1>headline title</h1>
        <div> this is content a aaa </div>
      </CollapseItem>
      <CollapseItem name="b" title="Title B">
        <div> this is bbbbb test </div>
      </CollapseItem>
      <CollapseItem name="c" title="Disabled Title" disabled>
        <div> this is cccc test </div>
      </CollapseItem>
    </Collapse>
    <br>
    <h1>Icon</h1>
    <h-icon icon="arrow-up" size="3x" type="danger"/>
    <h1>Tooltip</h1>
    <div>
      <Tooltip 
        content="hello tooltip"
      >
        <Button> 激活 Tooltip </Button>
      </Tooltip>
    </div>
    <br>
    <div>
      <Tooltip 
        content="hello tooltip"
        placement="top-start"
      >
        <Button> top-start </Button>
      </Tooltip>

      <Tooltip 
        content="hello tooltip"
        placement="bottom-start"
      >
        <Button> bottom-start </Button>
      </Tooltip>

      <Tooltip 
        content="hello tooltip"
        placement="left-start"
      >
        <Button> left-start </Button>
      </Tooltip>

      <Tooltip 
        content="hello tooltip"
        placement="right-start"
      >
        <Button> right-start </Button>
      </Tooltip>
    </div>
    <br>
    <div>
      <Tooltip 
        content="hello tooltip"
        trigger="click"
      >
        <Button> 点击激活 Tooltip </Button>
      </Tooltip>
    </div>
    <br>
    <div>
      <Tooltip
        trigger="click"
      >
        <Button> 复杂 HTML 结构的Tooltip </Button>
        <template #content>
          <h1> this is the title</h1>
          <p> this is the content </p>
        </template>
      </Tooltip>
    </div>
    <br>
  </main>
</template>

<style scoped>
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

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
