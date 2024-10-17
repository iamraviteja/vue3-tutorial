<template>
  <button
    :class="[
      'px-4 py-2 rounded-md font-semibold text-sm',
      `bg-${color}-500 hover:bg-${color}-600 text-white`,
    ]"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: 'blue',
    validator: value =>
      ['blue', 'green', 'red', 'yellow', 'purple'].includes(value),
  },
})

const emit = defineEmits(['click'])

const handleClick = event => {
  emit('click', event)
}
</script>
