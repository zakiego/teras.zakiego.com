import { defineStore } from "pinia";

export const useNameStore = defineStore("name", {
  state: () => {
    const name = createRandomName();

    return {
      value: name,
    };
  },
  actions: {
    updateValue(value: string) {
      this.value = value;
    },
  },
});
