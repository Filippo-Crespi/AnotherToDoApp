<template>
  <NuxtImg src="/circle.svg"
    class="fixed top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 h-[200%] w-[200%] max-w-none" />
  <div class="h-screen flex flex-col items-center px-12 gap-8 overflow-hidden">
    <div class="z-10">
      <!-- <Icon name="solar:checklist-minimalistic-bold-duotone" /> -->
    </div>
    <DashboardWelcome class="z-10" />
    <CategoryList class="z-10" />
  </div>
</template>

<script lang="ts" setup>


</script>

<style></style>