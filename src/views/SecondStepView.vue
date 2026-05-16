<script lang="ts" setup>

</script>

<template>
  <div class="container">
    <div class="screen-2">
      <div class="cells">
        <div class="cell" id="cell-1"></div>
        <div class="cell" id="cell-2"></div>
        <div class="cell" id="cell-3"></div>
        <div class="cell" id="cell-4"></div>
        <div class="cell" id="cell-5"></div>
        <div class="cell" id="cell-6"></div>
        <div class="cell" id="cell-7"></div>
        <div class="cell" id="cell-8"></div>
        <div class="cell" id="cell-9"></div>
      </div>
      <button class="btn-reset" id="btn-reset" type="reset">сброс</button>
    </div>
  </div>
</template>

<style scoped>
  .screen-2 {
    border: 1px solid #9494df;
    border-radius: 10px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 350px;
  }

  .cells {
    width: 100%;
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: repeat(3, 80px);
  }

  .cell {
    cursor: pointer;
    width: 80px;
    height: 80px;
    border: 1px solid #000;
  }

  .btn-reset {
    border-radius: 10px;
    background-color: #e31313;
    transition: all .3s;
    border: none;
    color: #fff;
    padding: 10px;
    text-transform: uppercase;
  }
</style>