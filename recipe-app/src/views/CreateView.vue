<script setup>
    import { ref } from 'vue';
    import { useRecipeStore } from '../stores/RecipeStore';

    let recipeStore = useRecipeStore();

    let linkText = ref("")
    let recipeName = ref("")
    let recipeDescription = ref("")

    function submit() {
        recipeStore.postRecipe({
            id: recipeStore.recipes.length,
            link: linkText.value,
            name: recipeName.value,
            description: recipeDescription.value
        })

        ZeroValues();
    }

    const ZeroValues = () => {
        linkText.value = ""
        recipeName.value = ""
        recipeDescription.value = ""
    }
</script>

<template>
    <main class="p-5">
        <div>
            <h1 class="font-bold text-2xl mb-5">Create a Recipe</h1>
            <img :src="linkText" class="w-52 h-52 mb-5 border border-gray-500 rounded-lg">
            <div>
                <h2 class="mb-2 font-bold">Image Link</h2>
                <input v-model="linkText" type="url" class="border border-gray-500 rounded-sm w-96 mb-5">
            </div>
            <div>
                <h2 class="mb-2 font-bold">Recipe name</h2>
                <input v-model="recipeName" type="text" class="border border-gray-500 rounded-sm w-96 mb-5">
            </div>
            <div>
                <h2 class="mb-2 font-bold">Recipe Description</h2>
                <textarea v-model="recipeDescription" class="border border-gray-500 rounded-sm w-96 mb-5 h-52" />
            </div>
            <button type="submit" @click="submit" class="border py-2 px-5 font-bold rounded-sm bg-gray-200">Create</button>
        </div>
    </main>
</template>