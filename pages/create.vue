<template>
  <div class="h-[100dvh] flex flex-col items-center justify-center gap-8 px-12">
    <NuxtImg src="/create.svg" />
    <input class="w-full border-2 border-[#e34f46] text-center text-[#e34f46]  font-semibold py-4 px-8 rounded"
      type="text" placeholder="Username" v-model="user" />
    <span v-if="error" class="text-[#e34f46] font-semibold">Enter a valid username</span>
    <button @click="create"
      class="bg-[#e34f46] w-full text-center text-white font-semibold py-4 px-8 rounded cursor-pointer">Create
      profile</button>
  </div>
</template>

<script lang="ts" setup>
import type { Category, Task } from '~/types'
import { useStorage } from '@vueuse/core'

const user = ref('')
const error = ref(false)
const create = () => {
  const username = useStorage('username', '')
  if (user.value.trim() === '') {
    error.value = true
    return
  }
  username.value = user.value
  useStorage('tasks', new Array<Task>())
  useStorage('categories', new Array<Category>())
  navigateTo('/dashboard')
}
</script>

<style></style>