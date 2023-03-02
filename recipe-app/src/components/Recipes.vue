<script setup>
    import Recipe from './Recipe.vue';
    import { useRecipeStore } from '../stores/RecipeStore.js';

    let recipeStore = useRecipeStore();
    recipeStore.get()
    
</script>

<template>
    <main>
        <div class="grid grid-cols-4 gap-4">
            <div v-for="recipe in recipeStore.recipes" :key="recipe.id">
                <Recipe :name="recipe.name" :description="recipe.description" :link="recipe.link" :id="recipe.id"></Recipe>
            </div>
        </div>
    </main>
</template>