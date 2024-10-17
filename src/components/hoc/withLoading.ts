import { defineComponent, h, ref, onMounted } from 'vue'

// HOC function to add loading state
export function withLoading(
  WrappedComponent: any,
  fetchData: () => Promise<any>,
) {
  return defineComponent({
    name: 'WithLoading',
    setup(props, { slots }) {
      const isLoading = ref<boolean>(true)
      const data = ref<any>(null)

      // Simulate data fetching
      onMounted(async () => {
        isLoading.value = true
        try {
          data.value = await fetchData()
        } catch (error) {
          console.error('Failed to load data:', error)
        } finally {
          isLoading.value = false
        }
      })

      // Render the wrapped component with loading logic
      return () =>
        isLoading.value
          ? h('div', { class: 'text-center text-gray-500' }, 'Loading...')
          : h(WrappedComponent, { ...props, ...data.value }, slots)
    },
  })
}
