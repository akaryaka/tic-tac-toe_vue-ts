<script setup lang="ts">
  import RadioButton from '../components/RadioButton.vue';
  import { toSecondStep } from '../composables/ticTacToe';
</script>

<template>
  <div class="container">
    <div class="screen-1">
      <form action="#" class="cells-header ">
        <h1 class="cells__title ">Кто ходит первым?</h1>
        <img class="cells__img" src="/1-step.jpg" alt="first-step">
        <div class="cells__type-wrapper">
          <RadioButton title="Нолики" value="round" checked/>
          <RadioButton title="Крестики" value="cross"/>
        </div>
        <button @click="toSecondStep" class="btn" type="submit" id="cells-header__btn">играть</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
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
    }
    &__img {
      margin-bottom: 30px;
      border-radius: 10px;
    }
    &__type {
      &-wrapper {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 30px;
      }
    }
  }

  .btn {
    border-radius: 10px;
    background-color: #fff;
    transition: all .3s;
    border: 1px solid #9494df;
    padding: 10px 0;
    text-transform: uppercase;
    &:hover {
      background-color: #9494df;
      color: #fff;
    }
  }
</style>
