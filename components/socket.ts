import { io } from "socket.io-client";

export const socket = io();

const socketSendMessage = ({
  message,
  username,
}: { message: string; username: string }) => {
  socket.emit("chat", {
    message,
    username,
    timestamp: new Date().toISOString(),
  });
};

export const socketEmitters = {
  sendMessage: socketSendMessage,
};
