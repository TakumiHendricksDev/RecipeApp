<script setup>
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <header class="bg-neutral-50">
    <Navbar class="p-5 flex w-100">
    </Navbar>
  </header>
  <body>
    <RouterView></RouterView>
  </body>
  <footer>

  </footer>
  
</template>
