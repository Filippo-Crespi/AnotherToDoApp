<template>
  <div class="flex items-center justify-center w-full gap-4 mt-8 self-start">
    <div class="flex flex-col items-center text-white text-center">
      <h1 class="font-black text-xl">Welcome back, {{ username }}</h1>
      <p class="mt-2">Today you have {{ tasks.length }} tasks</p>
    </div>
    <!-- <NuxtImg src="https://placehold.co/64" class="rounded-full" alt="avatar" /> -->
  </div>
</template>

<script lang="ts" setup>
import type { Task } from '~/types';
import { useStorage } from '@vueuse/core';
const username = useStorage('username', '');
const tasks = useStorage('tasks', []);
</script>

<style></style>