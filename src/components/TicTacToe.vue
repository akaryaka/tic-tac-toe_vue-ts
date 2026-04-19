<script setup lang="ts">
</script>

<template>
  <div class="container">
    <div class="screen-1">
      <form action="" class="cells-header">
        <h1 class="cells__title">Кто ходит первым?</h1>
        <div class="cells__type-wrapper">
          <div class="cells__type">
            <label for="round">Нолики</label>
            <input name="change" id="round" type="radio" checked />
          </div>
          <div class="cells__type">
            <label for="cross">Крестики</label>
            <input name="change" id="cross" type="radio" />
          </div>
        </div>
        <button class="btn" type="submit" id="cells-header__btn">играть</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(45deg, rgb(255, 255, 255), rgb(46, 46, 208));
  }

  .cells {
    width: 100%;
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: repeat(3, 80px);
    &-header {
      border: 1px solid #9494df;
      border-radius: 10px;
      padding: 50px;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      width: 350px;
    }
    &__type {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      width: 40%;
      text-transform: uppercase;
    }
    &__title {
      text-align: center;
      margin-bottom: 10px;
      font-size: 25px;
    }
    &-header {
      &.hide {
        display: none;
      }
    }
  }
</style>
