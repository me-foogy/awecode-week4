<template>
<p>{{product.title}}</p>
<p>{{product.price}}</p>
<p>{{product.id}}</p>

</template>

<script setup>
    const {id} = useRoute().params;
    const uri = 'https://fakestoreapi.com/products/' + id;

    const {data:product} = useFetch(uri);
    definePageMeta({
        layout: 'products',
    })
</script>