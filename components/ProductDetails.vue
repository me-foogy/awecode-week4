<template>
    <div class="card">
        <div class="flex flex-row flex-wrap gap-10 px-[10rem]">
            <div class="p-7 max-w-[50%]">
                <img :src="product.image" alt="product0-image">
            </div>
            <div class="p-7 max-w-[40%] pt-5">
                <p class="text-4xl mb-5">{{product.title}}</p>
                <p class="text-xl mb-7">Rs. {{product.price*100}}</p>
                <p class="font-bold mb-4 pb-2">Product Description:</p>
                <p>{{product.description}}</p>
            </div> 
        </div>
    </div>
</template>

<script setup>
    const {product} = defineProps(['product'])
</script>