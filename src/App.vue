<script setup lang="ts">
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
      <h-button> hello </h-button>
      <h-button type="primary"> Primary </h-button>
      <h-button type="success"> Success </h-button>
      <h-button type="warning"> Warning </h-button>
      <h-button type="danger"> Danger </h-button>
      <h-button type="info"> Info </h-button>
    </div>
    <br>
    <div>
      <h-button plain> hello </h-button>
      <h-button type="primary" plain> Primary </h-button>
      <h-button type="success" plain> Success </h-button>
      <h-button type="warning" plain> Warning </h-button>
      <h-button type="danger" plain> Danger </h-button>
      <h-button type="info" plain> Info </h-button>
    </div>
    <br>
    <div>
      <h-button round> hello </h-button>
      <h-button type="primary" round> Primary </h-button>
      <h-button type="success" round> Success </h-button>
      <h-button type="warning" round> Warning </h-button>
      <h-button type="danger" round> Danger </h-button>
      <h-button type="info" round> Info </h-button>
    </div>
    <br>
    <div>
      <h-button disabled> hello </h-button>
      <h-button type="primary" disabled> Primary </h-button>
      <h-button type="success" disabled> Success </h-button>
      <h-button type="warning" disabled> Warning </h-button>
      <h-button type="danger" disabled> Danger </h-button>
      <h-button type="info" disabled> Info </h-button>
    </div>
    <br>
    <div>
      <h-button size="large"> Large </h-button>
      <h-button type="primary"> 普通 </h-button>
      <h-button type="success" size="small"> Small </h-button>
    </div>
    <br>
    <div>
      <h-button circle> <h-icon icon="star" /> </h-button>
      <h-button type="primary" circle>   <h-icon icon="star" /> </h-button>
      <h-button type="success" circle> <h-icon icon="star" /> </h-button>
      <h-button type="warning" circle> <h-icon icon="star" /> </h-button>
      <h-button type="danger" circle> <h-icon icon="star" /> </h-button>
      <h-button type="info" circle> <h-icon icon="star" /> </h-button>
      <h-button icon="star"> Star h-button </h-button>
      <h-button loading> Loading </h-button>
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
