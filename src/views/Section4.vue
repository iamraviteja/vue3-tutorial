<template>
  <div class="max-w-2xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-2">
      Controlled vs. Uncontrolled Components
    </h1>
    <p class="text-base text-gray-600 leading-relaxed mb-6">
      Controlled Components: The parent component fully controls the component’s
      state via v-model or props.<br />
      Uncontrolled Components: Internal state is managed by the component itself
      without relying on external control.<br />
    </p>
    <p class="text-base text-gray-600 leading-relaxed mb-6">
      Use Case: Choose controlled components when you need strict control over
      form fields, and uncontrolled for simpler forms with minimal external
      state management.
    </p>
  </div>
  <!-- Simple example -->
  <div class="max-w-md mx-auto mt-20 p-6 bg-white shadow-md rounded-lg">
    <h1 class="text-2xl font-bold text-center mb-4">Simple Form Example</h1>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label
          for="username"
          class="block text-sm font-medium text-gray-700 mb-1"
        >
          Username
        </label>
        <input
          id="username"
          type="text"
          v-model="username"
          class="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your username"
          required
        />
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>

    <p v-if="submittedUsername" class="mt-4 text-center text-green-600">
      Submitted Username: <strong>{{ submittedUsername }}</strong>
    </p>
  </div>
  <!-- Complex example -->
  <div class="max-w-lg mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
    <h1 class="text-2xl font-bold text-center mb-6">Vue 3 Form Validation</h1>

    <form @submit.prevent="submitForm" class="space-y-6">
      <!-- Name Input -->
      <CustomInput
        v-model="formData.name"
        label="Name"
        :error-message="errors.name"
        required
      />

      <!-- Email Input -->
      <CustomInput
        v-model="formData.email"
        label="Email"
        type="email"
        :error-message="errors.email"
        required
      />

      <!-- Age Input -->
      <CustomInput
        v-model="formData.age"
        label="Age"
        type="number"
        :error-message="errors.age"
        :min="1"
        required
      />

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  </div>
  <!-- 3rd party packages -->
  <div class="max-w-2xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-2">
      Popular validation libraries
    </h1>
    <p class="text-base text-gray-600 leading-relaxed mb-6">
      FormKit: A form management solution for Vue 3, including validation, error
      messages, and form inputs. It provides a straightforward API for
      validation and handles error tracking and displaying.<br />
      Vuelidate: A lightweight, model-based validation library for Vue 3. It’s
      unopinionated, allowing for custom validation rules and can be used with
      any input component.<br />
      VeeValidate: A template-based form validation framework for Vue 3. It
      provides a flexible and extensible validation system, supports
      asynchronous validation, and can be used with any input component.<br />
    </p>
    <p class="text-base text-gray-600 leading-relaxed mb-6">
      Use Case: Choose validation library when there are 3 or more forms in your
      application.
    </p>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import CustomInput from '@/components/CustomInput.vue'

// Define reactive state using refs
const username = ref<string>('') // Input model
const submittedUsername = ref<string | null>(null) // Store submitted value

// Handle form submission
const handleSubmit = () => {
  submittedUsername.value = username.value
  console.log('Submitted:', username.value)
}

// Reactive form data
const formData = reactive({
  name: '',
  email: '',
  age: null as number | null,
})

// Error messages state
const errors = reactive({
  name: '',
  email: '',
  age: '',
})

// Simple validation logic
const validateForm = (): boolean => {
  let isValid = true

  errors.name = formData.name ? '' : 'Name is required'
  errors.email = /\S+@\S+\.\S+/.test(formData.email) ? '' : 'Invalid email'
  errors.age =
    formData.age !== null && formData.age > 0
      ? ''
      : 'Age must be a positive number'

  isValid = !Object.values(errors).some(error => error !== '')

  return isValid
}

// Form submission handler
const submitForm = () => {
  if (validateForm()) {
    console.log('Form submitted successfully!', formData)
    alert('Form submitted!')
  } else {
    console.log('Validation failed', errors)
  }
}
</script>
