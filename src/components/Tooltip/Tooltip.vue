<template>
  <div
    ref="popperContainerNode"
    class="hz-tooltip"
    v-on="outerEvents">
    <div
      class="hz-tooltip__trigger"
      ref="triggerNode"
      v-on="events"
    >
      <slot />
    </div>
    <Transition :name="transition">
      <div
        v-if="isOpen"
        class="hz-tooltip__popper"
        ref="popperNode"
      >
        <slot name="content">
          {{ content }}
        </slot>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, onUnmounted, reactive, ref, watch } from 'vue';
import type { Instance } from '@popperjs/core'
import { createPopper } from '@popperjs/core'
import type { TooltipProps, TooltipEmits, TooltipInstance } from './types'
import useClickOutside from '../..//hooks/useClickOutside'

const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'bottom',
  trigger: 'hover',
  transition: 'fade'
})
const emits = defineEmits<TooltipEmits>()
const isOpen = ref(false)
const triggerNode = ref<HTMLElement>()
const popperNode = ref<HTMLElement>()
const popperContainerNode = ref<HTMLElement>()
let popperInstance: Instance | null = null
let events: Record<string, any> = reactive({})
let outerEvents: Record<string, any> = reactive({})

const popperOptions = computed(() => {
  return {
    placement: props.placement,
    ...props.popperOptions
  }
})

// click event
const togglePopper = () => {
  isOpen.value = !isOpen.value
  emits('visible-change', isOpen.value)
}

// hover event
const hoverOpen = () => {
  isOpen.value = true
  emits('visible-change', true)
}
const hoverClose = () => {
  isOpen.value = false
  emits('visible-change', false)
}

useClickOutside(popperContainerNode, () => {
  if (props.trigger === 'click' && isOpen.value && !props.manual) {
    hoverClose()
  }
})

// add events to DOM
const attachEvents = () => {
  if (props.trigger === 'click') {
    events['click'] = togglePopper
  } else if (props.trigger === 'hover') {
    events['mouseenter'] = hoverOpen
    outerEvents['mouseleave'] = hoverClose
  }
}
if (!props.manual) {
  attachEvents()
}

watch(() => props.manual, (isManual) => {
  if (isManual) {
    events = {}
    outerEvents = {}
  } else {
    attachEvents()
  }
})

watch(() => props.trigger, (newTrigger, oldTrigger) => {
  if (newTrigger !== oldTrigger) {
    // 先清空再赋值
    events = {}
    outerEvents = {}
    attachEvents()
  }
})

watch(isOpen, (newVal) => {
  if (newVal) {
    if (triggerNode.value && popperNode.value) {
      popperInstance = createPopper(triggerNode.value, popperNode.value, popperOptions.value)
    } else {
      popperInstance?.destroy()
    }
  }
}, { flush: 'post'}) // DOM 节点生成后再 watch

onUnmounted(() => {
  popperInstance?.destroy()
})
defineExpose<TooltipInstance>({
  'show': hoverOpen,
  'hide': hoverClose
})
</script>