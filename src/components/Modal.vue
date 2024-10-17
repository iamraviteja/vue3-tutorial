<template>
  <div v-if="isOpen" class="modal-overlay" @click="closeModal">
    <div class="modal-container" @click.stop>
      <div class="modal-header">
        <slot name="header">
          <h3>Default Header</h3>
        </slot>
        <button class="close-button" @click="closeModal">&times;</button>
      </div>
      <div class="modal-body">
        <slot name="body">
          <p>Default body content</p>
        </slot>
      </div>
      <div class="modal-actions">
        <slot name="actions">
          <button @click="closeModal">Close</button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(props.modelValue)

watch(
  () => props.modelValue,
  newValue => {
    isOpen.value = newValue
  },
)

const closeModal = () => {
  isOpen.value = false
  emit('update:modelValue', false)
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  background-color: white;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal-body {
  margin-bottom: 15px;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
}
</style>
