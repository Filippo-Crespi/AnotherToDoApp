<template>
  <div class="h-[100dvh] flex flex-col items-center justify-center gap-4 px-12">
    <NuxtImg src="/welcome.svg" />
    <div class="flex flex-col gap-2 text-center">
      <span class="font-black text-2xl">Get Your Life Messier</span>
      <span>Yeah... another simple and effective bla bla to do list and task manager app which helps you manage
        time and sh*t</span>
    </div>
    <NuxtLink :to="loggedIn.value ? '/dashboard' : '/create'"
      class="bg-[#e34f46] w-full text-center text-white font-semibold py-4 px-8 rounded">
      Get Started
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const username = useState('username');
const loggedIn = ref();
if (!username.value) {
  loggedIn.value = false
}
</script>

<style></style>