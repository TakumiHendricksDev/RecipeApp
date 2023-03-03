import {defineStore} from "pinia";
import axios from "axios";

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
        },

        postRecipe(data) {
            axios.post('http://localhost:3000/recipes', {
                id: data.id,
                link: data.link,
                name: data.name,
                description: data.description
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        putRecipe(data){
            axios.patch('http://localhost:3000/recipes/' + data.id, {
                id: data.id,
                link: data.link,
                name: data.name,
                description: data.description
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },

    getters: {
        getRecipeById: (state) => {
            return (id) => state.recipes.find((recipe) => recipe.id === id)
        },
        getRecipes: () => {
            return recipes;
        }
    }
});