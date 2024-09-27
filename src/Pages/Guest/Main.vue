<script setup></script>

<template>
  <div class="grid grid-rows-1 mt-10">
    <div class="flex justify-center">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="flex justify-center items-center w-[250px]">
          <p class="text-3xl font-bold">
            Estudia a tu propio ritmo con múltiples métodos de aprendizaje
          </p>
        </div>
        <div class="flex justify-center">
          <img
            src="/src/assets/img/diseniodealumnos2.jpeg"
            class="h-[400px] rounded-full"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="grid grid-rows-1">
    <div class="flex justify-center">
      <div class="flex justify-center"></div>
    </div>
  </div>
</template>

<style scoped>
.myimage {
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 82%, 0% 100%);
  clip-path: polygon(0 0, 100%, 100% 70%, 0% 96%);
  background: url("@/assets/img/imagen_alumnos.png") no-repeat;
  position: relative;
  height: 850px;
  background-size: cover;

  z-index: -1;
}
.myimage:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
}

@media screen and (max-width: 1024px) {
  .myimage {
    height: 600px;
    top: 100px;
  }
}

/* Large smartphones */
@media screen and (max-width: 768px) {
  .myimage {
    height: 500px;
    top: 100px;
  }
}

/* Small smartphones */
@media screen and (max-width: 450px) {
  .myimage {
    height: 350px;
    top: 100px;
  }
}
</style>
