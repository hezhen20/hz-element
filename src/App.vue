<script setup lang="ts">
import Button from './components/Button/Button.vue'
import { ButtonInstance } from './components/Button/types'
import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
import { ref, onMounted } from 'vue'

const buttonRef = ref<ButtonInstance | null>(null)
const openedArr = ref(['a'])

onMounted(() => {
  console.log(buttonRef.value?.ref) 
})
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <main>
    <h1>Button</h1>
    <div>
      <Button> hello </Button>
      <Button type="primary"> Primary </Button>
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
      <Button circle>circle</Button>
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
    <h1>Collapse</h1>
    <Collapse v-model="openedArr" accordion>
      <CollapseItem name="a">
        <template #title>
          <span>slot title a</span>
        </template>
        content a
      </CollapseItem>
      <CollapseItem name="b" title="title b">
        content b
      </CollapseItem>
      <CollapseItem name="c" title="title c disabled" disabled>
        content c
      </CollapseItem>
    </Collapse>
    {{ openedArr }}
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
