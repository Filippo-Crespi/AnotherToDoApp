<template>
  <NuxtLink :to="`/dashboard/category/${props.category.id}`">
    <div class="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-lg w-full">
      <Icon :name="props.category.icon"
        class="flex-1 text-6xl text-blue-500 transition-colors duration-200 group-hover:text-blue-600" />
      <div class="flex flex-col flex-7">
        <span class="text-gray-700 font-black text-xl group-hover:text-gray-900">
          {{ props.category.name }}
        </span>
        <span class="text-gray-500 text-md">0 Tasks</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { Category } from '~/types';
const props = defineProps({
  category: {
    type: Object as () => Category,
    required: true
  }
});
</script>