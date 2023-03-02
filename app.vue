<script setup lang="ts">
import { useUser } from './composables/useAuth';

const user = useState;
console.log("nuxt useState: ", user)
const nuxtApp = useNuxtApp();
nuxtApp.hook("page:finish", () => {
  window.scrollTo(0,0);
})

await useUser();

</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>