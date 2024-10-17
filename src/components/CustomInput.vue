<template>
  <div class="flex flex-col space-y-2">
    <label class="font-semibold text-gray-700">{{ label }}</label>
    <input
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :min="min"
      :required="required"
      class="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <span v-if="errorMessage" class="text-red-500 text-sm">{{
      errorMessage
    }}</span>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'

// Define props with TypeScript types
defineProps<{
  modelValue: string | number | null
  label: string
  type?: string
  errorMessage?: string
  required?: boolean
  min?: number
}>()

// Emit the v-model update event
defineEmits(['update:modelValue'])
</script>

<style scoped>
/* No additional styles needed since Tailwind handles it */
</style>
