<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <main>
        <div>
            <slot name="logo" class="fill-current h-8 w-8 mr-2" width="54" height="54">
            </slot>
        </div>
        <nav class="flex">
            <RouterLink class="mr-6 text-black hover:text-gray-400" to="/">Home</RouterLink>
            <RouterLink class="mr-6 text-black hover:text-gray-400" to="/about">About</RouterLink>
            <RouterLink class="mr-6 text-black hover:text-gray-400" to="/create">Create</RouterLink>
        </nav>
    </main>
</template>