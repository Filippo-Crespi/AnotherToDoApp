<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script lang="ts">

definePageMeta({
  meta: [
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-title', content: 'AnotherToDoList' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }
  ],
  link: [
    { rel: 'apple-touch-icon', href: '/icons/icon-192x192.png' }
  ]
});

</script>