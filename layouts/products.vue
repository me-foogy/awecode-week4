<template>
    <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4">
            <NuxtLink to="/" class="font-bold">PROJECT PRODUCTS</NuxtLink>
        </nav>
    </header>
    <div class="container mx-auto p-10">
        <slot/>
    </div>
    <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <ul class="flex gap-4">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/products">Products</NuxtLink></li>
            </ul>
    </footer>
</template>

<style scoped>
    .router-link-active{
        background-color: #12b488;
        color:white; 
        padding: 0.5rem 1rem; 
        border-radius: 2rem; 
    }
</style>