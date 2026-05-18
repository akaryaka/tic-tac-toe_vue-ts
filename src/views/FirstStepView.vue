<script setup lang="ts">
  import { changeValue } from '../constants';
</script>

<template>
  <div class="container">
    <div class="screen-1">
      <form action="#" class="cells-header ">
        <h1 class="cells__title ">Кто ходит первым?</h1>
        <div class="cells__type-wrapper">
          <!-- вынести в компонент -->
          <div class="cells__type ">
            <label for="round">Нолики</label>
            <input name="change" value="round" id="round" type="radio" v-model="changeValue" checked />
          </div>
          <!-- вынести в компонент -->
          <div class="cells__type ">
            <label for="cross">Крестики</label>
            <input name="change" value="cross" id="cross" type="radio" v-model="changeValue"/>
          </div>
        </div>
        <button class="btn" type="submit" id="cells-header__btn">играть</button>
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
