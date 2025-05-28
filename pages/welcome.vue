<template>
  <div class="h-[100dvh] flex flex-col items-center justify-center gap-4 px-12">
    <NuxtImg src="/welcome.svg" />
    <div class="flex flex-col gap-2 text-center">
      <span class="font-black text-2xl">Get Your Life Messier</span>
      <span>Yeah... another simple and effective bla bla to do list and task manager app which helps you manage
        time and sh*t</span>
    </div>
    <NuxtLink :to="loggedIn ? '/dashboard' : '/create'"
      class="bg-[#e34f46] w-full text-center text-white font-semibold py-4 px-8 rounded">
      Get Started
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { useStorage } from '@vueuse/core';
const username = useStorage('username', '');
const loggedIn = ref(false);
if (username.value) {
  loggedIn.value = true
}
</script>

<style></style>