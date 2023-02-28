<script setup>
  const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<template>
  <div>
    <h1 class="bg-red-600 shadow-lg">hello world</h1>
    <div v-for="p in products" :key="p.id">
      <p>{{ p.title }}</p>
    </div>
  </div>
</template>