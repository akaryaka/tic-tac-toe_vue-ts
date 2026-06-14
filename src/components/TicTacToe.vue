<script lang="ts" setup>
  import FirstStepView from '../views/FirstStepView.vue';
  import SecondStepView from '../views/SecondStepView.vue';
  import ThirdStepView from '../views/ThirdStepView.vue';
  import { displayFirstStep, displaySecondStep, displayThirdStep } from '../constants';
</script>

<template>
  <FirstStepView v-show="displayFirstStep"/>
  <SecondStepView v-show="displaySecondStep"/>
  <ThirdStepView v-show="displayThirdStep"/>
</template>

