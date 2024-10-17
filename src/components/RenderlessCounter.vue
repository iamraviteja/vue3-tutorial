<template>
  <!-- The component doesn't render anything itself -->
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'

// Define the props
interface Props {
  initialCount?: number
  min?: number
  max?: number
}

const props = withDefaults(defineProps<Props>(), {
  initialCount: 0,
  min: Number.MIN_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER,
})

// Define emits
const emit = defineEmits<{
  (e: 'update:count', value: number): void
}>()

// Initialize the count with the prop value
const count = ref(props.initialCount)

// Computed property to check if decrementing is allowed
const canDecrement = computed(() => count.value > props.min)

// Computed property to check if incrementing is allowed
const canIncrement = computed(() => count.value < props.max)

// Method to increment the count
const increment = () => {
  if (canIncrement.value) {
    count.value++
    emit('update:count', count.value)
  }
}

// Method to decrement the count
const decrement = () => {
  if (canDecrement.value) {
    count.value--
    emit('update:count', count.value)
  }
}

// Method to reset the count to the initial value
const reset = () => {
  count.value = props.initialCount
  emit('update:count', count.value)
}

// Expose the state and methods
defineExpose({
  count,
  increment,
  decrement,
  reset,
  canIncrement,
  canDecrement,
})
</script>

<!-- Usage example: -->
<!--
<template>
  <RenderlessCounter
    v-slot="{ count, increment, decrement, reset, canIncrement, canDecrement }"
    :initial-count="0"
    :min="0"
    :max="10"
    @update:count="(newCount) => console.log('New count:', newCount)"
  >
    <div>
      <p>Count: {{ count }}</p>
      <button @click="increment" :disabled="!canIncrement">Increment</button>
      <button @click="decrement" :disabled="!canDecrement">Decrement</button>
      <button @click="reset">Reset</button>
    </div>
  </RenderlessCounter>
</template>
-->
