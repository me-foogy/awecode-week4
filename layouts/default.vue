<template>
    <header class="shadow-sm bg-white">
        <nav class="container mx-auto p4 flex justify-between">
            <NuxtLink to="/" class="font-bold">PROJECT</NuxtLink>
            <ul class="flex gap-4">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
            </ul>
        </nav>
    </header>
    <div class="container mx-auto p-4">
        <slot/>
    </div>
</template>