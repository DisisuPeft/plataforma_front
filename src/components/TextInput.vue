<script setup>
import { onMounted, ref } from 'vue';

defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
  if (input.value.hasAttribute('autofocus')) {
    input.value.focus();
  }
});

defineExpose({ focus: () => input.value.focus() });
// border-gray-300 focus:border-sky-500 focus:ring-indigo-500 rounded-md shadow-sm
//border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm border border-4
</script>

<template>
  <input
      class="border-gray-400 focus:border-sky-500 focus:blue-sky-500 rounded-md shadow-xl border border-1 p-2"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      ref="input"
  />
</template>

<style scoped>

</style>