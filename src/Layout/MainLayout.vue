<script setup>
import { computed, onMounted, ref } from "vue";
import Modal from "../components/Modal/Modal.vue";
import Login from "../components/Auth/Login.vue";
import Register from "../components/Auth/Register.vue";
import { useAuthStore } from "../store/authStore.js";
import { useRouter } from "vue-router";

const router = useRouter();
const authStore = useAuthStore();
const show = ref(false);
const component = ref("Login");
const msg = ref("");

function close() {
  show.value = false;
}

const components = {
  Login,
  Register,
};

// function errorMsg() {
//   for (const errorsKey in authStore.message) {
//     msg.value += authStore.message[errorsKey];
//   }
//   return msg;
// }

function submit_register(form) {
  authStore.get_register(form);
  // console.log(form);
  if (authStore.get_estado === 201) {
    close();
  }
}
function submit_login(form) {
  authStore.get_login(form);
  if (authStore.get_estado === 201) {
    close();
  }
}

function logout() {
  authStore.get_logout();
  router.push("/");
}
</script>

<template>
  <div class="h-screen flex flex-col">
    <header>
      <nav
        class="w-full bg-white py-2 dark:bg-body-dark z-20 h-[100px] fixed shadow-lg"
      >
        <div class="container mx-auto flex justify-between items-center mt-2">
          <div class="flex-shrink-0 ml-10 ma-4 md:ml-0">
            <div class="text-center mt-1">
              <div></div>
            </div>
          </div>

          <div class="flex justify-center ml-3">
            <div class="fill-current text-gray-400 mt-4">
              <p class="text-2xl">EduSprint</p>
            </div>
          </div>
          <div class="hidden lg:flex flex-grow justify-end mr-16 pr-16 mt-4">
            <ul class="flex space-x-8">
              <li>
                <router-link
                  class="text-black hover:text-blue-400 transition duration-300 text-lg"
                  :to="authStore.isAuthenticated ? '/dashboard' : '/'"
                >
                  Inicio
                </router-link>
              </li>
              <li>
                <!-- <button
                  class="text-black hover:text-blue-400 transition duration-300 text-lg"
                >
                  Cursos
                </button> -->
              </li>
            </ul>
          </div>
          <div class="hidden lg:flex lg:justify-end mr-10 mt-4">
            <template v-if="authStore.isAuthenticated">
              <div class="flex justify-center ml-3">
                <div class="fill-current text-gray-400 mt-3">
                  <p class="text-2xl">
                    {{ authStore.get_user?.username }}
                  </p>
                </div>
              </div>
            </template>
            <template v-if="!authStore.isAuthenticated">
              <button
                class="rounded-md flex items-center p-2 bg-sky-500"
                @click="show = true"
              >
                <p class="text-lg text-white">Iniciar sesión</p>
              </button>
              <Modal :show="show" @close="close">
                <div class="grid grid-rows-1">
                  <div class="flex justify-center">
                    <component
                      :is="components[component]"
                      @close:emit="show = $event"
                      @formLogin:emit="submit_login"
                      @formRegister="submit_register"
                    ></component>
                  </div>
                </div>
                <div class="grid grid-rows-1 p-4">
                  <div class="flex justify-start">
                    <template v-if="component === 'Login'">
                      <button
                        class="bg-white hover:bg-indigo-500 p-2 rounded-xl text-gray-700 hover:text-white"
                        @click="component = 'Register'"
                      >
                        <span class="">
                          ¿Aún no te encuentras registrado?
                        </span>
                      </button>
                    </template>
                    <template v-if="component === 'Register'">
                      <button
                        class="bg-white hover:bg-indigo-500 p-2 rounded-xl text-gray-700 hover:text-white"
                        @click="component = 'Login'"
                      >
                        <span class="">
                          ¿Ya te encuentras registrado? Inicia sesión
                        </span>
                      </button>
                    </template>
                  </div>
                </div>
              </Modal>
            </template>
            <template v-else-if="authStore.isAuthenticated">
              <button class="rounded-md flex items-center p-4" @click="logout">
                <p class="text-lg hover:text-blue-400">Cerrar sesión</p>
              </button>
            </template>
          </div>
        </div>
      </nav>
    </header>
    <main class="flex-1 pt-[100px]">
      <router-view></router-view>
    </main>
  </div>
</template>

<style></style>
