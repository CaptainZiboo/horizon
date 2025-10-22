<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import { useData, inBrowser } from 'vitepress';
import { watchEffect, onMounted } from 'vue';

const { lang } = useData();
watchEffect(() => {
  if (inBrowser) {
    document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`;
  }
});

onMounted(() => {
  if (!inBrowser) return;
  const path = window.location.pathname;
  if (path === '/horizon/' || path === '/horizon/index.html') {
    window.location.replace('/horizon/en/');
  }
});
</script>

<template>
  <DefaultTheme.Layout />
</template>
