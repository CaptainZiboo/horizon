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

// --- Redirect logic based on _redirects rules ---
function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

onMounted(() => {
  if (!inBrowser) return;
  const nfLang = getCookie('nf_lang');
  const path = window.location.pathname;

  // If cookie doesn't exist, redirect to /en
  if (!nfLang && !path.startsWith('/en/')) {
    window.location.replace('/en' + (path === '/' ? '' : path));
    return;
  }
  // Redirect for fr
  if (nfLang === 'fr' && !path.startsWith('/fr/')) {
    window.location.replace('/fr' + (path === '/' ? '' : path));
    return;
  }
  // Redirect for en
  if (nfLang === 'en' && !path.startsWith('/en/')) {
    window.location.replace('/en' + (path === '/' ? '' : path));
    return;
  }
});
</script>

<template>
  <DefaultTheme.Layout />
</template>
