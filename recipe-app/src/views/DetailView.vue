<script setup>
    import { useRecipeStore } from '../stores/RecipeStore.js';
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    let recipeStore = useRecipeStore();
    recipeStore.get();
    const route = useRoute()
    const url = route.params.url
    let recipe = ref({})
    for (var i in recipeStore.recipes){
        if(recipeStore.recipes[i].id == url){
            recipe.value = recipeStore.recipes[i]
        }
    }
</script>

<template>
    <main class="p-5">
        <h1 class="font-bold text-2xl mb-5">{{ recipe.name }}</h1>
        <p class="mb-5">{{ recipe.description }}</p>
        <img :src="recipe.link" />
    </main>
</template>