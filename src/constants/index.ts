  import { ref, reactive } from 'vue';

  export const changeValue = ref('round');
  export const countClick: any = ref(0);
  export const buttons = reactive([
    {id: "1", state: false, class: '', classDisabled: ''},
    {id: "2", state: false, class: '', classDisabled: ''},
    {id: "3", state: false, class: '', classDisabled: ''},
    {id: "4", state: false, class: '', classDisabled: ''},
    {id: "5", state: false, class: '', classDisabled: ''},
    {id: "6", state: false, class: '', classDisabled: ''},
    {id: "7", state: false, class: '', classDisabled: ''},
    {id: "8", state: false, class: '', classDisabled: ''},
    {id: "9", state: false, class: '', classDisabled: ''},
  ])