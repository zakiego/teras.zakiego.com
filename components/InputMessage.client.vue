<script setup lang="ts">
import { ref } from "vue";
import { socket, socketEmitters } from "./socket";

const message = ref("");
const username = useUsernameStore();

function sendMessage() {
  socketEmitters.sendMessage({
    message: message.value,
    username: username.value,
  });

  message.value = "";
}
</script>

<template>
  <!-- floating in bottom, input message -->
  <div class="fixed bottom-2 bg-white w-full p-4 max-w-md">
    <div class="flex items-center justify-between">
      <input
        v-model="message"
        @keyup.enter="sendMessage"
        type="text"
        class="px-4 flex-1 py-3 border border-gray-200 rounded-2xl"
        placeholder="Type a message..."
      />

      <div
        class="ml-2 flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full"
      >
        <button @click="sendMessage" class="text-white">
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
