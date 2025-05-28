<template>
  <div class="flex flex-col gap-8 items-stretch w-full">
    <CategoryBox v-for="category in categories" :category="category" :key="category.id" class="w-full" />
  </div>
</template>

<script lang="ts" setup>
const categories = useState('categories', () => [
  { id: 1, name: 'Work', icon: 'noto:sun' },
  { id: 2, name: 'Personal', icon: 'noto:boy-medium-light-skin-tone' },
  { id: 3, name: 'Shopping', icon: 'noto:shopping-cart' },
  { id: 4, name: 'Health', icon: 'noto:heart-suit' },
  { id: 5, name: 'Travel', icon: 'noto:airplane' }
]);
</script>


<style></style>