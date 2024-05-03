<script setup>
import { socket } from "./socket";

const isConnected = ref(false);
const transport = ref("N/A");

if (socket.connected) {
  onConnect();
}

function onConnect() {
  isConnected.value = true;
  transport.value = socket.io.engine.transport.name;

  socket.io.engine.on("upgrade", (rawTransport) => {
    transport.value = rawTransport.name;
  });
}

function onDisconnect() {
  isConnected.value = false;
  transport.value = "N/A";
}

socket.on("connect", onConnect);
socket.on("disconnect", onDisconnect);

onBeforeUnmount(() => {
  socket.off("connect", onConnect);
  socket.off("disconnect", onDisconnect);
});

function disconnect() {
  socket.disconnect();
}

function connect() {
  socket.connect();
}
</script>

<template>
  <div>
    <p>Status: {{ isConnected ? "connected" : "disconnected" }}</p>
    <p>Transport: {{ transport }}</p>

    <button @click="isConnected ? disconnect() : connect()" class="bg-red-500">
      {{ isConnected ? "Disconnect" : "Connect" }}
    </button>
  </div>
</template>
