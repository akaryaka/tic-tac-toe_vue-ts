<script lang="ts" setup>
import { buttons } from "../constants";
import { btnClick, reset } from "../composables/ticTacToe";
</script>

<template>
  <div class="container">
    <div class="screen-2">
      <div class="cells">
        <div
          v-for="button in buttons"
          @click="btnClick($event, button)"
          class="cell"
          :class="[button.class, button.classDisabled]"
          :key="button.id"
        ></div>
      </div>
      <button @click="reset" class="btn-reset" id="btn-reset" type="reset">
        сброс
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
  &.disabled {
    pointer-events: none;
  }
  &.round {
    position: relative;
    &::before {
      content: "o";
      position: absolute;
      font-size: 30px;
      color: #23e123;
      left: 50%;
      top: 50%;
      text-align: center;
      align-content: center;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      background-color: #affaaf;
    }
  }
  &.cross {
    position: relative;
    &::before {
      content: "x";
      position: absolute;
      font-size: 30px;
      color: red;
      left: 50%;
      top: 50%;
      text-align: center;
      align-content: center;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      background-color: rgb(255, 168, 168);
    }
  }
}

.btn-reset {
  border-radius: 10px;
  background-color: #e31313;
  transition: all 0.3s;
  border: none;
  color: #fff;
  padding: 10px;
  text-transform: uppercase;
  &:hover {
    opacity: 0.7;
  }
}
</style>
