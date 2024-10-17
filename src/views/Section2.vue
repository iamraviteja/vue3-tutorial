<template>
  <div class="max-w-xl mx-auto mt-10">
    <h1 class="text-2xl font-bold text-center mb-6">Vue 3 HOC Example</h1>

    <!-- Render the HOC-wrapped component -->
    <LoggedBaseComponent />
  </div>

  <!-- second example -->
  <div class="max-w-xl mx-auto mt-10">
    <h1 class="text-2xl font-bold text-center mb-6">
      Vue 3 HOC Example with Loading
    </h1>

    <!-- Render the HOC-wrapped component -->
    <LoadingUserCard />
  </div>
  <div class="max-w-2xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-2">
      Other usecases with HOCs
    </h1>
    <p class="text-base text-gray-600 leading-relaxed mb-6">
      Error Handling: Displays error messages and prevents rendering the
      component until data is successfully fetched.<br />
      Authentication: Checks if the user is authenticated and redirects them if
      they are not.<br />
      Caching: Stores fetched data in cache or localStorage to avoid unnecessary
      network calls.<br />
    </p>
    <h1 class="text-3xl font-bold text-gray-900 mb-2">When to Use HOCs</h1>
    <p class="text-base text-gray-600 leading-relaxed mb-6">
      Reuse Logic: When you need to apply the same logic (e.g., authentication,
      caching) across multiple components.<br />
      Encapsulate Side Effects: Avoid cluttering individual components with side
      effects (e.g., fetching, authentication logic).<br />
      Consistent Error/Loading States: Ensure a consistent user experience for
      things like loading spinners or error messages.<br />
    </p>
  </div>
</template>

<script lang="ts" setup>
import BaseComponent from '@/components/BaseComponent.vue'
import { withRenderLogger } from '@/components/hoc/withRenderLogger'

import UserCard from '@/components/UserCard.vue'
import { withLoading } from '@/components/hoc/withLoading'

// Wrap BaseComponent with the HOC
const LoggedBaseComponent = withRenderLogger(BaseComponent)

// Simulate a data-fetching function that returns a user after a delay
const fetchUserData = async () => {
  return new Promise<{ user: { name: string; email: string } }>(resolve => {
    setTimeout(() => {
      resolve({
        user: {
          name: 'John Doe',
          email: 'john.doe@example.com',
        },
      })
    }, 2000) // Simulated delay of 2 seconds
  })
}

// Wrap UserCard with the HOC to add loading state
const LoadingUserCard = withLoading(UserCard, fetchUserData)
</script>

<style scoped>
/* Optional: Styles using Tailwind CSS */
</style>
