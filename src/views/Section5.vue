<template>
  <form
    @submit="onSubmit"
    class="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-md"
  >
    <!-- Name Field -->
    <div class="mb-4">
      <label for="name" class="block text-sm font-medium text-gray-700"
        >Name</label
      >
      <Field
        name="name"
        as="input"
        class="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 transition duration-150 ease-in-out"
        :class="{ 'border-red-500': meta.touched && errors.name }"
        placeholder="Enter your name"
      />
      <span
        v-if="meta.touched && errors.name"
        class="text-sm text-red-500 mt-1"
        >{{ errors.name }}</span
      >
    </div>

    <!-- Email Field -->
    <div class="mb-4">
      <label for="email" class="block text-sm font-medium text-gray-700"
        >Email</label
      >
      <Field
        name="email"
        as="input"
        type="email"
        class="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 transition duration-150 ease-in-out"
        :class="{ 'border-red-500': meta.touched && errors.email }"
        placeholder="Enter your email"
      />
      <span
        v-if="meta.touched && errors.email"
        class="text-sm text-red-500 mt-1"
        >{{ errors.email }}</span
      >
    </div>

    <!-- Password Field -->
    <div class="mb-4">
      <label for="password" class="block text-sm font-medium text-gray-700"
        >Password</label
      >
      <Field
        name="password"
        as="input"
        type="password"
        class="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 transition duration-150 ease-in-out"
        :class="{ 'border-red-500': meta.touched && errors.password }"
        placeholder="Enter your password"
      />
      <span
        v-if="meta.touched && errors.password"
        class="text-sm text-red-500 mt-1"
        >{{ errors.password }}</span
      >
    </div>

    <button
      type="submit"
      class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-150 ease-in-out"
    >
      Submit
    </button>
  </form>
</template>

<script lang="ts" setup>
import { defineRule, Field, Form, useForm } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import * as yup from 'yup'

// Define validation rules
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)

// Yup schema for advanced validation
const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
})

// Use VeeValidate's form composable
const { handleSubmit, errors, meta } = useForm({
  validationSchema: schema,
})

// Submit handler
const onSubmit = handleSubmit(values => {
  console.log('Form submitted with:', values)
})
</script>

<style scoped>
/* Optional: Customize Tailwind defaults if needed */
</style>
