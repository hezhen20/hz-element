<template>
  <div class="hz-dropdown">
    <Tooltip
      :trigger="trigger"
      :placement="placement"
      :popper-options="popperOptions"
      :open-delay="openDelay"
      :close-delay="closeDelay"
      @visible-change="visibleChange"
      ref="tooltipRef"
    >
      <slot />
      <template #content>
        <ul class="hz-dropdown__menu">
          <template v-for="item in menuOptions" :key="item.key">
            <li
              v-if="item.divided"
              role="separator"
              class="divided-placeholder"
            ></li>
            <li
              class="hz-dropdown__item"
              @click="itemClick(item)"
              :class="{
                'is-disabled': item.disabled,
                'is-divided': item.divided
              }"
              :id="`dropdown-item-${item.key}`"
            >
              <RenderVnode :vNode="item.label" />
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import Tooltip from '../Tooltip/Tooltip.vue'
import RenderVnode from '../Common/RenderVnode'
import type { DropdownProps, DropdownInstance, DropdownEmits, MenuOption } from './types'
import type { TooltipInstance } from '../Tooltip/types'

defineProps<DropdownProps>()
const emits = defineEmits<DropdownEmits>()
const tooltipRef = ref() as Ref<TooltipInstance>
const visibleChange = (e: boolean) => {
  emits('visible-change', e)
}
const itemClick = (item: MenuOption) => {
  if (item.disabled) {
    return
  }
  emits('select', item)
}
defineExpose<DropdownInstance>({
  show: tooltipRef.value?.show,
  hide: tooltipRef.value?.hide
})
</script>