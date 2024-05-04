<script setup lang="ts">
import { ref } from "vue";
import { socketEmitters } from "./socket";

const message = ref("");
const name = useNameStore();

const isInputEmpty = computed(() => message.value.trim().length === 0);

function sendMessage() {
  socketEmitters.sendMessage({
    message: message.value,
    name: name.value,
  });

  message.value = "";
}
</script>

<template>
  <!-- floating in bottom, input message -->
  <div class="fixed bottom-0 w-full max-w-lg bg-white">
    <div class="flex items-center justify-between mb-2">
      <input
        v-model="message"
        @keyup.enter="!isInputEmpty && sendMessage()"
        type="text"
        class="px-4 flex-1 py-3 border border-gray-200 rounded-2xl"
        placeholder="Type a message..."
      />

      <div
        class="ml-2 flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full"
      >
        <button
          @click="sendMessage"
          class="text-white"
          :disabled="isInputEmpty"
        >
          <UIcon
            name="i-heroicons-paper-airplane"
            :dynamic="true"
            class="w-6 h-6"
          />
        </button>
      </div>
    </div>
  </div>
</template>
