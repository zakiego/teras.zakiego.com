import { defineStore } from "pinia";

export const useUsernameStore = defineStore("username", {
  state: () => ({
    value: "",
  }),
  actions: {
    updateValue(value: string) {
      this.value = value;
    },
  },
});
