import { watch } from "vue";
import {
  countClick,
  changeValue,
  buttons,
  displayFirstStep,
  displaySecondStep,
  displayThirdStep,
  winCheck,
  btnActive,
} from "../constants";

export const btnClick = function (event: Event, item: any) {
  event.preventDefault();

  item.state = !item.state;

  item.classDisabled = "disabled";
  countClick.value++;

  if (changeValue.value == "round" && countClick.value % 2 == 1) {
    item.class = "round";
  } else if (changeValue.value == "round" && countClick.value % 2 == 0) {
    item.class = "cross";
  } else if (changeValue.value == "cross" && countClick.value % 2 == 1) {
    item.class = "cross";
  } else if (changeValue.value == "cross" && countClick.value % 2 == 0) {
    item.class = "round";
  }

  btnActive.push(item);
};

  
watch(btnActive, (oldvalue, newvalue) => {
  const roundWinList = btnActive.map(item => {
    if (item.class == "round") {
      return item.id
    }
  }).filter(item => {
     return item != undefined
  })

  
  const crossWinList = btnActive.map(item => {
    if (item.class == "cross") {
      return item.id
    } 
    
  }).filter(item => {
    return item != undefined
  })

  function roundWinCheck() {
    const roundStr = roundWinList.map(item => {
      return item
    })

    const winCheckStr = winCheck.map(item => {
      return String(item) == String(roundStr)
    })

    winCheckStr.map(item=> {
      if (item === true){
        alert("Победили нолики!")
        displaySecondStep.value = false;
        displayThirdStep.value = true;
      }
    })
  }

  function crossWinCheck() {
    const crossdStr = crossWinList.map(item => {
      return item
    })

    const winCheckStr = winCheck.map(item => {
      return String(item) == String(crossdStr)
    })

    winCheckStr.map(item=> {
      if (item === true){
        alert("Победили нолики!")
        displaySecondStep.value = false;
        displayThirdStep.value = true;
      }
    })
  }
  
  console.log(roundWinCheck());
  console.log(crossWinCheck());

});



export const reset = function () {
  countClick.value = 0;

  buttons.forEach((item) => {
    item.state = false;
    item.class = "";
    item.classDisabled = "";
  });
};

export const toSecondStep = function (event: Event) {
  event.preventDefault();
  displayFirstStep.value = false;
  displaySecondStep.value = true;
};


