<script setup lang="ts">
  import { changeValue } from '../constants';

  const props = defineProps({
    title: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    checked: {
      type: Boolean
    },
  })
</script>

<template>
  <div class="cells__type ">
    <label :for="value" :class="value === changeValue ? 'label_active' : ''">{{ title }}</label>
    <input :name="value" :value="value" :id="value" type="radio" v-model="changeValue" :checked="value === changeValue" />
  </div>
</template>

<style scoped>
  label {
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  input {
    opacity: 0;
  }

  .label_active {
    border-bottom: 2px solid blue;
    padding-bottom: 5px;
  }
</style>
