<script setup lang="ts">
import { socket } from "~/components/socket";
import { useUsernameStore } from "~/stores/input";

const username = useUsernameStore();

const chat = ref([
  {
    username: "Zaki",
    message:
      "Halo, apa kabar. Aku mau cerita panjang nih. Jadi kemarin aku pergi ke pasar dan bertemu dengan teman lama. Dia bilang kalau aku sudah berubah.",
    timestamp: "12:00",
  },
  {
    username: "Agus",
    message: "Halo, baik. Terima kasih.",
    timestamp: "12:01",
  },
  {
    username: "Zaki",
    message: "Ada yang bisa saya bantu?",
    timestamp: "12:02",
  },
  {
    username: "Agus",
    message: "Tidak ada, terima kasih.",
    timestamp: "12:03",
  },
  {
    username: "Zaki",
    message: "Baik, terima kasih.",
    timestamp: "12:04",
  },
  {
    username: "Agus",
    message: "Sama-sama.",
    timestamp: "12:05",
  },
]);

socket.on("chat", (data) => {
  chat.value.push(data);
});
</script>

<template>
  <div>
    <UContainer class="max-w-md">
      <Login />
      <div class="w-full bg-black py-3">
        <h1 class="px-2">Teras</h1>
      </div>

      <div class="mt-5">
        <!-- <MyMessage message="Halo, apa kabar?" name="Aku" timestamp="12:00" />
        <TheirMessage message="Halo, baik. Terima kasih." name="Dia" timestamp="12:01" /> -->
        <ul class="space-y-4">
          <template v-for="item in chat">
            <li v-if="item.username === 'Agus'">
              <MyMessage
                :message="item.message"
                :name="item.username"
                :timestamp="item.timestamp"
              />
            </li>
            <li v-else>
              <TheirMessage
                :message="item.message"
                :name="item.username"
                :timestamp="item.timestamp"
              />
            </li>
          </template>
        </ul>
      </div>

      <InputMessage />
    </UContainer>
  </div>
</template>
