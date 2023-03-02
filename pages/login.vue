<script setup lang="ts">
const email: Ref<string> = ref('');
const password: Ref<string> = ref('');

const postLoginForm = async () => {
  await loginWithEmail(email.value, password.value)
}
</script>

<template>
  <h2>Login</h2>
  <div>
    <form v-on:submit.prevent>

      <label for="email">Email</label>
      <input v-model="email" id="email" name="email" placeholder="king.james@lakers.com" type="email" required />

      <label for="password">Password</label>
      <input v-model="password" id="password" name="password" type="password" required />

      <button @click.prevent="postLoginForm">Submit</button>

    </form>
  </div>
</template>