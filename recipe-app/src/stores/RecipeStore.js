import {defineStore} from "pinia";

export let useRecipeStore = defineStore('recipe', {
    state(){
        return {
            recipes: [],
        };
    },

    actions: {
        get() {
            fetch('http://localhost:3000/recipes')
            .then(response => response.json())
            .then(data => {
                this.recipes = data;
            });
        }
    }
});