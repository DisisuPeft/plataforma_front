<script setup>
import InputLabel from "../InputLabel.vue";
import TextInput from "../TextInput.vue";
import { onMounted, ref } from "vue";
import { useAuthStore } from "../../store/authStore.js";
import { success } from "../../sweetAlerts/alert.js";
import { useRouter } from "vue-router";

const router = useRouter();
const authStore = useAuthStore();
const form = ref({
  email: "",
  password: "",
});

const emit = defineEmits(["close:emit", "formLogin:emit"]);
function submit() {
  emit("formLogin:emit", form.value);
  emit("close:emit", false);
}

onMounted(() => {
  // console.log(authStore.isAuthenticated)
});
</script>

<template>
  <div class="grid-rows-2 p-10">
    <div class="flex justify-center">
      <!--      <div>-->
      <p class="text-lg">Iniciar sesión.</p>
      <!--      </div>-->
    </div>
    <!--    <form @submit.prevent="submit">-->
    <div class="p-4">
      <div class="">
        <InputLabel for="email" value="Email" />
        <TextInput
          id="email"
          type="email"
          class="mt-1 block w-[400px]"
          v-model="form.email"
          required
          autocomplete="email"
        />
      </div>
      <div>
        <InputLabel for="password" value="Contraseña" />
        <TextInput
          id="password"
          type="password"
          class="mt-1 block w-full"
          v-model="form.password"
          required
          autocomplete="password"
        />
      </div>
    </div>
    <div class="flex justify-end">
      <button
        class="rounded-md bg-sky-500 hover:bg-sky-700 p-2"
        @click="submit"
      >
        <span class="text-white uppercase">Iniciar</span>
      </button>
    </div>
    <!--    </form>-->
  </div>
</template>

<style scoped></style>
