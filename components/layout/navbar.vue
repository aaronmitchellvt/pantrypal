<script setup lang="ts">
import { userLogout } from "~/composables/useAuth";

const logout = userLogout;
// const router = useRouter();
// const user = useState('user')
const initialCheck = await useLoggedIn()
const isLoggedIn = ref(initialCheck);
</script>


<template>
  <div class="bg-green-400 w-full">
    <nuxt-link to="/">
      <button>Home</button>
    </nuxt-link>

    <ul>
      <li v-if="!isLoggedIn">
        <nuxt-link to="/register">
          <button>Register</button>
        </nuxt-link>
      </li>
      <li v-if="!isLoggedIn">
        <nuxt-link to="/login">
          <button>Login</button>
        </nuxt-link>
      </li>
      <li @click="logout" v-if="isLoggedIn">
        <button>Logout</button>
      </li>
    </ul>
  </div>
</template>