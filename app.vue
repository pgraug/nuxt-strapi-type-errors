<template>
  <div>
    <h1>Test</h1>
    <p>{{ $testKey }}</p>
  </div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();

const stringFunction = (str: string) => true;

stringFunction(nuxtApp.$testKey);
</script>
