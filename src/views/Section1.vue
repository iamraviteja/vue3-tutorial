<template>
  <div class="max-w-2xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-2">
      How to use slots to create reuseable components
    </h1>
    <h2 class="text-xl font-semibold text-gray-700 mb-4">
      Creating a button and Modal
    </h2>
    <p class="text-base text-gray-600 leading-relaxed mb-6">
      Below is example of a button.
      <ReusableButton @click="showModal = true" color="green">
        Open Modal
      </ReusableButton>
    </p>

    <h1 class="text-3xl font-bold text-gray-900 mb-2">
      Vue 3 Renderless Components
    </h1>
    <p class="text-base text-gray-600 leading-relaxed mb-6">
      In Vue 3, renderless components are a powerful concept that allows you to
      encapsulate functionality and expose it to consumers through scoped slots.
      This approach enables you to write reusable, modular code that can be
      easily integrated into various UI components.
    </p>
    <h2 class="text-xl font-semibold text-gray-700 mb-4">
      Key Characteristics
    </h2>
    <p class="text-base text-gray-600 leading-relaxed mb-6">
      No rendering: Renderless components do not render any HTML themselves.
      Instead, they manage state and behavior, exposing a single scoped slot for
      consumers to render their own content. <br />
      Scoped slots: Renderless components use scoped slots to pass data and
      functionality to consumers. This allows consumers to customize the
      rendering of the component without modifying its internal logic. <br />
      Encapsulation: Renderless components encapsulate their implementation
      details, making it easier to reuse and maintain them across different
      parts of your application.
    </p>
    <div>
      <RenderlessCounter
        v-slot="{
          count,
          increment,
          decrement,
          reset,
          canIncrement,
          canDecrement,
        }"
        :initial-count="0"
        :min="0"
        :max="10"
        @update:count="newCount => console.log('New count:', newCount)"
      >
        <div>
          <p class="text-base text-gray-600 leading-relaxed mb-6">
            Count: {{ count }}
          </p>
          <ReusableButton @click="increment" :disabled="!canIncrement">
            Increment
          </ReusableButton>
          <ReusableButton @click="decrement" :disabled="!canDecrement">
            Decrement
          </ReusableButton>
          <ReusableButton @click="reset">Reset</ReusableButton>
        </div>
      </RenderlessCounter>
    </div>
  </div>

  <!-- Modal -->
  <Modal v-model="showModal">
    <template #header>
      <h2>Custom Header Passed To Slot</h2>
    </template>
    <template #body>
      <p>This is the custom body content passed to slot.</p>
    </template>
    <template #actions>
      <ReusableButton @click="showModal = false" color="red">
        Cancel
      </ReusableButton>
      <ReusableButton @click="handleConfirm" color="blue">
        Confirm
      </ReusableButton>
    </template>
  </Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ReusableButton from '@/components/Button.vue'
import Modal from '@/components/Modal.vue'
import RenderlessCounter from '@/components/RenderlessCounter.vue'

const showModal = ref(false)

const handleConfirm = () => {
  // Handle confirmation logic
  showModal.value = false
}
</script>
