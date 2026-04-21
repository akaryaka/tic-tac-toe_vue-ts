<script setup lang="ts">
</script>

<template>
  <div class="w-full h-screen flex justify-center items-center bg-gradient-to-tr from-white to-[#2e2ed0]">
    <div class="screen-1">
      <form action="#" class="cells-header border-1 border-solid border-[#9494df] flex flex-col w-[350px] rounded-[10px] bg-[#fff] p-[50px]">
        <h1 class="cells__title mb-10 align-center text-[25px]">Кто ходит первым?</h1>
        <div class="cells__type-wrapper">
          <div class="cells__type flex justify-center items-center mb-[10px] w-[40%] uppercase">
            <label for="round">Нолики</label>
            <input name="change" id="round" type="radio" checked />
          </div>
          <div class="cells__type flex justify-center items-center mb-[10px] w-[40%] uppercase">
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
</style>
