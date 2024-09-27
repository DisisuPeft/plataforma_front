<script setup>
import Main from './Layout/MainLayout.vue'
import {onMounted, watch} from "vue";
import {useAuthStore} from "./store/authStore.js";

const authStore = useAuthStore()

// watch(() => authStore.isAuthenticated, (newValue) => {
//   console.log('Estado autenticado actualizado:', newValue)
// })

onMounted(() => {

  authStore.loadTokenFromStorage()
  authStore.loadUserFromStorage()
  // console.log(authStore.isAuthenticated)
});
</script>

<template>
  <Main></Main>
</template>

<style scoped>

</style>
