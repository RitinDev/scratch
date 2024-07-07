<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <h1>Scratch</h1>
    <h3>Hi! Welcome to <span class="underlined-text">Scratch</span> </h3>
    <TheWelcome />
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
}

h1::after {
  width: 10%;
}

h3 {
  text-align: center;
  margin-bottom: 1em;
}

p {
  text-align: center;
}
</style>