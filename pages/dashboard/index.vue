<template>
  <NuxtImg src="/circle.svg" :class="[
    'fixed top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 max-w-none',
    isEmpty ? 'h-[100%] w-[100%]' : 'h-[200%] w-[200%]'
  ]" />
  <button
    class="text-4xl fixed bottom-4 right-4 z-20 bg-[#e34f46] rounded-full p-2 grid place-items-center shadow-lg text-white ">
    <Icon name="solar:add-circle-bold-duotone" />
  </button>
  <div class="h-screen flex flex-col items-center px-12 gap-8 overflow-hidden">
    <DashboardWelcome class="z-10" />
    <CategoryList class="z-10" />
  </div>
</template>

<script lang="ts" setup>
import { useStorage } from '@vueuse/core'
import type { Category } from '~/types'

const username = useStorage('username', '')

onBeforeMount(() => {
  if (!username)
    navigateTo('/welcome')
  return
})

const categories = useStorage<Category[]>('categories', [])

const isEmpty = computed(() => categories.value.length < 1)
</script>