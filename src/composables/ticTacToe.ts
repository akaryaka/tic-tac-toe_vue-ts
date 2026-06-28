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
  const roundWinList = btnActive
    .map(item => {
      if (item.class == "round") {
        return item.id
      }
    }).filter(item => {
      return item != undefined
    }).sort()
  
  const crossWinList = btnActive
    .map(item => {
      if (item.class == "cross") {
        return item.id
      } 
    }).filter(item => {
      return item != undefined
    }).sort()


  function resultGame() {
    let resRound, resCross;

    resRound =  winCheck.some(winItem => 
      winItem.every(roundItem => roundWinList.includes(roundItem))
    );

    if (resRound) {
      winner.value = "Нолики";
      buttons.forEach(item => {
        item.classDisabled = "disabled"
      })
      setTimeout(function() {
        displaySecondStep.value = false;
        displayThirdStep.value = true;
      }, 1500)
    }

    resCross =  winCheck.some(winItem => 
      winItem.every(crossItem => crossWinList.includes(crossItem))
    );

    if (resCross) {
      winner.value = "Крестики";
      buttons.forEach(item => {
        item.classDisabled = "disabled"
      })
      setTimeout(function() {
        displaySecondStep.value = false;
        displayThirdStep.value = true;
      }, 500)
    }
  }

  resultGame()

  function drawCheck() {    
    if(winner.value === "" && countClick.value==9) {
      winner.value = "Ничья";
      setTimeout(function() {
        displaySecondStep.value = false;
        displayThirdStep.value = true;
      }, 500)
    }
  }

  drawCheck()
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


