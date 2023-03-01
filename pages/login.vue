<script setup lang="ts">
const email: Ref<string> = ref('');
const password: Ref<string> = ref('');
</script>

<template>
  <h2>Login</h2>
  <div>
    <form v-on:submit.prevent action="#" method="POST">

      <label for="email">Email</label>
      <input v-model="email" id="email" name="email" placeholder="king.james@lakers.com" type="email" required />

      <label for="password">Password</label>
      <input v-model="password" id="password" name="password" type="password" required />

      <button type="submit">Submit</button>

    </form>
  </div>
</template>