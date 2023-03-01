<script setup>
import {RouterView } from 'vue-router'
import NavBarApp from './components/NavBarApp.vue';
</script>

<template>
  <header>
    <nav-bar-app></nav-bar-app>
  </header>

  <RouterView />
</template>