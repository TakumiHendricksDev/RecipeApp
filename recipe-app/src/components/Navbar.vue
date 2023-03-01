<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <main>
        <div>
            <slot name="logo"></slot>
        </div>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
    </main>
</template>