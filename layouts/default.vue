<script setup="ts">
import Navbar from "~/components/layout/navbar.vue";

</script>
<template>
  <div class="h-screen bg-slate-300">
    <Navbar />
    <slot />
  </div>
</template>