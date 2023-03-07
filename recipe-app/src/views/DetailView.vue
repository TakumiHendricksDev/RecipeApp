<script setup>
    import { useRecipeStore } from '../stores/RecipeStore.js';
    import { ref, onMounted } from 'vue';
    import { useRoute, RouterLink } from 'vue-router';

    let recipeStore = useRecipeStore();
    recipeStore.get()
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
        <div class="mb-5">
            <RouterLink class="border rounded-md bg-gray-200 py-2 px-5" :to="{ name: 'Edit', params: { url:url } }">Edit Recipe</RouterLink>
        </div>
        <img :src="recipe.link" class="w-auto h-96 mb-5 rounded-lg"/>
        <h1 class="font-bold text-2xl mb-5">{{ recipe.name }}</h1>
        <p class="mb-5">{{ recipe.description }}</p>  
    </main>
</template>