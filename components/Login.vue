<script setup lang="ts">
import { useUsernameStore } from "~/stores/input";

const isOpen = ref(true);

const username = useUsernameStore();

const isDisabled = computed(() => username.value.length < 3);
</script>

<template>
  <div>
    <UModal v-model="isOpen" prevent-close>
      <div class="p-4">
        <div class="text-center">
          <p class="font-bold text-xl">Selamat Datang di Teras ☕️</p>
          <p class="opacity-75 text-xs">Tempat bincang hangat</p>
        </div>

        <div class="mt-2">
          <label for="name"> Nama </label>
        </div>
        <UInput
          v-model="username.value"
          id="name"
          placeholder="Masukkan namamu"
          class="mt-2"
          data-1p-ignore
        />
        <div class="mt-5">
          <UButton
            @click="isOpen = false"
            :disabled="isDisabled"
            class="w-full"
            :ui="{ base: 'disabled:opacity-25 transtion-all' }"
            block
          >
            Masuk</UButton
          >
        </div>
      </div>
    </UModal>
  </div>
</template>
