<script setup lang="ts">
import { socket } from "~/components/socket";
import { useNameStore } from "~/stores/input";

import InputMessage from "~/components/InputMessage.client.vue";
import Login from "~/components/Login.client.vue";
import MyMessage from "~/components/MyMessage.client.vue";
import TheirMessage from "~/components/TheirMessage.client.vue";

useHead({
  title: "Teras",
});

const name = useNameStore();

// const chat = ref();

const { data, status } = await useAsyncData(
  "history",
  () => {
    console.log("Fetching data");

    return $fetch("/api/history");
  },
  {
    server: true,
  },
);

onMounted(async () => {
  window.scrollTo(0, document.body.scrollHeight); // Scroll to bottom
});

socket.on("chat", (msg) => {
  console.log("New chat", msg);

  data.value?.push(msg);
});
</script>

<template>
  <div>
    <UContainer class="max-w-lg px-0">
      <div class="px-3">
        <div
          class="fixed top-0 w-full bg-white shadow-md max-w-lg rounded-md rounded-t-none"
        >
          <div class="p-4 flex justify-between">
            <div class="font-bold text-lg">Chat</div>
            <p>
              {{ name.value }}
            </p>
          </div>
        </div>

        <div class="mt-5" id="chat">
          <ul class="space-y-4 my-20">
            <template v-for="item in data" :hidden="status === 'loading'">
              <li v-if="item.name === name.value">
                <MyMessage
                  :message="item.message"
                  :name="item.name"
                  :timestamp="item.timestamp"
                />
              </li>
              <li v-else>
                <TheirMessage
                  :message="item.message"
                  :name="item.name"
                  :timestamp="item.timestamp"
                />
              </li>
            </template>
          </ul>
        </div>

        <InputMessage />
      </div>
    </UContainer>
  </div>
</template>
