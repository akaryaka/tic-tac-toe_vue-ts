<script lang="ts" setup>
  import { winner } from '../constants';
</script>

<template>
  <Transition>
    <div class="screen-3">
      <form action="#" class="cells-header">
        <h2 class="cells__title">Победа!</h2>
        <p>{{ winner }} победили</p>
      </form>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
  .cells {
    &-header {
      border: 1px solid #9494df;
      border-radius: 10px;
      padding: 50px;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      width: 450px;
    }
    &__title {
      text-align: center;
      margin-bottom: 30px;
    }}

  .v-enter-active {
    transition: opacity 0.3s ease;

  }

  .v-leave-active {
    transition: opacity 0.3s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>