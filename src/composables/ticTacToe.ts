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
  winner,
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

  console.log(roundWinList);
  
  
  

  // console.log(roundWinListRemove);
  
  
  const crossWinList = btnActive.map(item => {
    if (item.class == "cross") {
      return item.id
    } 
  }).filter(item => {
    return item != undefined
  })

  function roundWinCheck() {
    const winCheckStr = winCheck.map(item => {
      return String(item) == String(roundWinList)
    })

    winCheckStr.map(item=> {
      if (item === true){
        winner.value = "Нолики";
        // для анимации 
        const roundWinListRemove = buttons.filter((item) => !roundWinList.includes(item.id))
        roundWinListRemove.forEach(item => {
          item.classDisabled = "disabled"
        })
        console.log(roundWinListRemove);
        
        // setTimeout(function() {
        //   displaySecondStep.value = false;
        //   displayThirdStep.value = true;
        // }, 500)
      }
    })
  }

  function crossWinCheck() {
    const winCheckStr = winCheck.map(item => {
      return String(item) == String(crossWinList)
    })



    winCheckStr.map(item=> {
      if (item === true){
        winner.value = "Крестики";
        // setTimeout(function() {
        //   displaySecondStep.value = false;
        //   displayThirdStep.value = true;
        // }, 500)
      }
    })
  }

  roundWinCheck()
  crossWinCheck()
});

export const reset = function () {
  countClick.value = 0;

  buttons.forEach((item) => {
    item.state = false;
    item.class = "";
    item.classDisabled = "";
  });

  btnActive.splice(0, btnActive.length)

  displaySecondStep.value = false;
  displayFirstStep.value = true;
};

export const toSecondStep = function (event: Event) {
  event.preventDefault();
  displayFirstStep.value = false;
  displaySecondStep.value = true;
};


