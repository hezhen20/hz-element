<template>
  <div class="trans-container">
    <div class="trans-container__box" @drop="drop($event, 'left')" @dragover.prevent>
      <input type="text" placeholder="请输入..." v-model="searchText" />
      <div class="trans-container__box-content">
        <div v-for="item in filteredLeftOptions" :key="item.id">
          <input type="checkbox" v-model="selectedLeftItems" :value="item" />
          <span draggable="true" @dragstart="dragStart($event, item)">{{ item.label }}</span>
        </div>
      </div>
      <div class="trans-container__box-button">
        <button @click="handleSelectAll('left')">全选</button>
        <button @click="handleClearAll('left')">清空</button>
      </div>
    </div>
    <div class="trans-container__arrow">
      <span @click="handleSelect('left')">&lt</span>
      <span @click="handleSelect('right')">></span>
    </div>
    <div class="trans-container__box" @drop="drop($event, 'right')" @dragover.prevent>
      <div class="trans-container__box-content">
        <div v-for="item in rightData" :key="item.id">
          <input type="checkbox" v-model="selectedRightItems" :value="item" />
          <span draggable="true" @dragstart="dragStart($event, item)">{{ item.label }}</span>
        </div>
      </div>
      <div class="trans-container__box-button">
        <button @click="handleSelectAll('right')">全选</button>
        <button @click="handleClearAll('right')">清空</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TransItem, TransferEmits, TransBoxProps } from './types'
import { ref, computed } from 'vue';

const props = defineProps<TransBoxProps>()
let leftData = ref<TransItem[]>(props.leftData || [])
let rightData = ref<TransItem[]>(props.rightData || []);
let selectedLeftItems = ref<TransItem[]>(props.selectedLeftItems || []);
let selectedRightItems = ref<TransItem[]>(props.selectedRightItems || []);
const emits = defineEmits<TransferEmits>()
const searchText = ref('');
let currentDraggedItem = ref<TransItem | null>(null);

const filteredLeftOptions = computed(() => {
  return leftData.value.filter(option => option.label.toLowerCase().includes(searchText.value.toLowerCase()));
});

const dragStart = (event, item) => {
  currentDraggedItem.value = item;
};

const drop = (event, box) => {
  if (!currentDraggedItem.value) {
    return
  }
  // 拖拽赋值
  if (box === 'left' && !leftData.value.includes(currentDraggedItem.value)) {
    leftData.value = [...leftData.value, currentDraggedItem.value];
    rightData.value = rightData.value.filter(item => item.id !== currentDraggedItem.value!.id);
    // 拖拽后需要清除勾选效果
    selectedLeftItems.value = selectedLeftItems.value.filter(item => item.id !== currentDraggedItem.value!.id);
  } else if(box === 'right' && !rightData.value.includes(currentDraggedItem.value)) {
    rightData.value = [...rightData.value, currentDraggedItem.value];
    leftData.value = leftData.value.filter(item => item.id !== currentDraggedItem.value!.id);
    // 拖拽后需要清除勾选效果
    selectedRightItems.value = selectedRightItems.value.filter(item => item.id !== currentDraggedItem.value!.id);
  }
  emits('drop-transfer', currentDraggedItem.value)
  currentDraggedItem.value = null;
};

// 选中穿梭
const handleSelect = (to: string) => {
  if (to === 'right') {
    rightData.value = [...rightData.value, ...selectedLeftItems.value]
    // 穿梭后去重
    leftData.value = leftData.value.filter(leftItem => {
      return !selectedLeftItems.value.some(selectItem => selectItem.id === leftItem.id);
    });
    emits('select-transfer', selectedLeftItems.value)
    selectedLeftItems.value = []
  } else {
    leftData.value = [...leftData.value, ...selectedRightItems.value]
    // 穿梭后去重
    rightData.value = rightData.value.filter(rightItem => {
      return !selectedRightItems.value.some(selectItem => selectItem.id === rightItem.id);
    });
    emits('select-transfer', selectedRightItems.value)
    selectedRightItems.value = []
  }
}

// 全选
const handleSelectAll = (side: string) => {
  if (side === 'left') {
    selectedLeftItems.value = [...leftData.value]
  } else {
    selectedRightItems.value = [...rightData.value]
  }
}

// 清空
const handleClearAll = (side: string) => {
  if (side === 'left') {
    selectedLeftItems.value = []
  } else {
    selectedRightItems.value = []
  }
}
</script>

<style lang="less" scoped>
.trans-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__box {
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 300px;
    border: 1px solid #ccc;
    padding: 10px;

    &-content {
      margin-top: 8px;
      margin-bottom: 12px;
      flex: 1;
      overflow: auto;
    }

    &-button {
      button:first-child {
        margin-right: 8px;
      }
    }
  }

  &__arrow {
    span {
      cursor: pointer;
    }
    span:first-child {
      margin-right: 16px
    }
  }
}
</style>