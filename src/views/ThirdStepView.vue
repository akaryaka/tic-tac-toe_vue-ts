<script lang="ts" setup>
  import { winner } from '../constants';
</script>

<template>
  <Transition>
    <div class="screen-3">
      <form action="#" class="cells-header">
        <h2 class="cells__title">Игра окончена!</h2>
        <p class="cells__message" v-if="winner=='Нолики' || winner=='Крестики'">
          <span class="cells__winner" :class="{'win-cross': winner === 'Крестики', 'win-round': winner === 'Нолики'}">{{ winner }} &nbsp;</span>  
          <span>победили</span> 
        </p>
        <p class="cells__message" v-else>{{ winner }}</p>
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
      @media(max-width: 575px) {
        width: auto;
        padding: 30px;
      }
    }
    &__title {
      text-align: center;
      margin-bottom: 30px;
    }
    &__message {
      font-size: 20px;
      text-align: center;
    }
    &__winner {
      font-weight: 700;
    }
  }

  .win-cross {
    color: red;
  }

  .win-round {
    color: green;
  }

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