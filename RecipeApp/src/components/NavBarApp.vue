<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <header>
        <nav>
            <h1>Recipe App</h1>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/my-recipes">My Recipes</RouterLink>
            <RouterLink to="/create">Create</RouterLink>
        </nav>
    </header>
</template>
