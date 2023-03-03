<script setup>
    import { ref, onMounted } from 'vue';
    import { useRecipeStore } from '../stores/RecipeStore';
    import { uuid } from 'vue-uuid';
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

    let linkText = ref(recipe.value.link)
    let recipeName = ref(recipe.value.name)
    let recipeDescription = ref(recipe.value.description)

    function submit() {
        recipeStore.putRecipe({
            id: recipe.value.id,
            link: linkText.value,
            name: recipeName.value,
            description: recipeDescription.value
        })
    }
</script>

<template>
    <main class="p-5">
        <div>
            <h1 class="font-bold text-2xl mb-5">Edit the Recipe</h1>
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
            <button type="submit" @click="submit" class="border py-2 px-5 font-bold rounded-sm bg-gray-200">Save</button>
        </div>
    </main>
</template>