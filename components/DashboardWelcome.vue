<template>
  <div class="flex items-center justify-between gap-4 mt-8 self-start">
    <div class="flex flex-col text-white">
      <h1 class="font-black text-xl">Welcome back, {{ username }}</h1>
      <p class="mt-2">Today you have {{ tasks.length }} tasks</p>
    </div>
    <!-- <NuxtImg src="https://placehold.co/64" class="rounded-full" alt="avatar" /> -->
  </div>
</template>

<script lang="ts" setup>
const username = useState('username', () => 'John Doe');
const tasks = useState('tasks', () => [
  { id: 1, title: 'Complete project report', completed: false },
  { id: 2, title: 'Attend team meeting', completed: true },
  { id: 3, title: 'Buy groceries', completed: false }
]);
</script>

<style></style>