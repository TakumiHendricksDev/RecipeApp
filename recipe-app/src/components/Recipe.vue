<script setup>
    defineProps({
        link: String,
        name: String,
        description: String
    })
</script>

<template>
    <main class="border rounded-lg bg-neutral-50 p-5 w-96 h-auto mx-5">
        <div class="w-auto h-auto">
            <img class=" rounded-t-lg" :src="link">
        </div>
        <div class="p-5">
            <div class="pb-5">
                <h1 class="font-bold">{{ name }}</h1>
            </div>
            <div class="pb-5">
                <p>{{ description }}</p>
            </div>
        </div>
    </main>
</template>