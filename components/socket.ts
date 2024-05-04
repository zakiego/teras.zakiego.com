import { io } from "socket.io-client";

export const socket = io();

const socketSendMessage = ({
  message,
  name,
}: { message: string; name: string }) => {
  socket.emit("chat", {
    message,
    name,
    timestamp: new Date(),
  });
};

export const socketEmitters = {
  sendMessage: socketSendMessage,
};
