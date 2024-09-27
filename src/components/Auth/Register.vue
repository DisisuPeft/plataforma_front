<script setup>
import InputLabel from "../InputLabel.vue";
import TextInput from "../TextInput.vue";
import { ref } from "vue";

const form = ref({
  email: "",
  password: "",
  username: "",
});

const emit = defineEmits(["modalRegister", "formRegister"]);

function submit() {
  emit("formRegister", form.value);
  // emit("modalRegister", "Login");
}
</script>

<template>
  <div class="grid-rows-2 p-10">
    <div class="flex justify-center">
      <!--      <div>-->
      <p class="text-lg">Registrarse.</p>
      <!--      </div>-->
    </div>
    <div class="p-4">
      <div class="">
        <InputLabel for="username" value="Nombre de usuario" />
        <TextInput
          id="username"
          type="text"
          class="mt-1 block w-[400px]"
          v-model="form.username"
          required
          autocomplete="autocomplete"
        />
      </div>
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
  </div>
</template>

<style scoped></style>
