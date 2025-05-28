<template>
  <div v-if="categories.length > 0" class="flex flex-col gap-8 items-stretch w-full">
    <CategoryBox v-for="category in categories" :category="category" :key="category.id" class="w-full" />
  </div>
  <div v-else class="flex flex-col items-center justify-center text-center">
    <NuxtImg src="/empty.svg" />
    <span class="text-gray-500 text-lg">No categories found</span>
    <span class="text-gray-500 text-lg">Create a new category to get started</span>
  </div>
</template>

<script lang="ts" setup>
import type { Category } from '~/types';
import { useStorage } from '@vueuse/core';
const categories = useStorage<Category[]>('categories', []);
</script>

<style></style>