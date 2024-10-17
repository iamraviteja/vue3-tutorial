# Component Patterns in Vue

In this session we will go through different component patterns using composition api in Vue.

## What does Composition APIs expose?

Reactivity API: e.g. `ref()` and `reactive()` that allow us to directly create reactive state, computed state, and watchers.
Lifecycle Hooks: e.g. `onMounted()` and `onUnmounted()` that allow us to programmatically hook into the component lifecycle.
Dependency Injection: e.g. `provide()` and `inject()` that allow us to leverage Vue's dependency injection system while using Reactivity APIs.

Simple slot base patterns

- create simple button
- create a modal
  Complex example Renderless Components
