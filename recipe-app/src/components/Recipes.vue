<script setup>
    import { ref } from 'vue';
    import Recipe from './Recipe.vue';

    let recipes = ref([])

    fetch('http://localhost:3000/recipes')
            .then(response => response.json())
            .then(data => {
                recipes.value = data;
            });
</script>

<template>
    <main>
        <div class="grid grid-cols-4 gap-4">
            <div v-for="recipe in recipes" :key="recipe.id">
                <Recipe :name="recipe.name" :description="recipe.description" :link="recipe.link"></Recipe>
            </div>
        </div>
    </main>
</template>