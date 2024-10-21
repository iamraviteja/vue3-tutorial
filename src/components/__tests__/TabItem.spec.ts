import { mount, shallowMount } from '@vue/test-utils'
import TabItem from '@/components/TabItem.vue'
import { describe, it, expect, vi } from 'vitest'
import { h, defineComponent, ref } from 'vue'

// Create a mock parent to provide the necessary context
const MockProvider = defineComponent({
  setup(_, { slots }) {
    const activeTab = ref(0)
    const setActiveTab = vi.fn()

    return () =>
      h(
        'div',
        {
          provide: { activeTab, setActiveTab },
        },
        slots.default?.(),
      )
  },
})

describe('TabItem.vue', () => {
  it('renders correctly and triggers active tab change on click', async () => {
    const wrapper = mount(MockProvider, {
      slots: {
        default: () => h(TabItem, { index: 1 }, 'Tab 1'),
      },
    })

    const button = wrapper.find('button')
    expect(button.text()).toBe('Tab 1')
    await button.trigger('click')

    // Validate that the setActiveTab was called
    const setActiveTab = (wrapper.vm.$options.provide as any).setActiveTab
    expect(setActiveTab).toHaveBeenCalledWith(1)
  })
})
