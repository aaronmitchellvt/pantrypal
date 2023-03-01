<script setup lang="ts">
const firstName: Ref<string> = ref('');
const lastName: Ref<string> = ref('');
const email: Ref<string> = ref('');
const password: Ref<string> = ref('');
const confirmPassword: Ref<string> = ref('');
</script>

<template>
  <h2>Sign Up</h2>
  <div>
    <form v-on:submit.prevent action="#" method="POST">

      <label for="firstName">First</label>
      <input v-model="firstName" id="firstName" name="firstName" placeholder="Lebron" required />

      <label for="lastName">Last</label>
      <input v-model="lastName" id="lastName" name="lastName" placeholder="James" required />

      <label for="email">Email</label>
      <input v-model="email" id="email" name="email" placeholder="king.james@lakers.com" required />

      <label for="password">Password</label>
      <input v-model="password" id="password" name="password" type="password" required />

      <label for="confirmPassword">Confirm Password</label>
      <input v-model="confirmPassword" id="confirmPassword" name="confirmPassword" type="password" required />

      <button type="submit">Register</button>
    </form>
  </div>
</template>