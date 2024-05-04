import { Server as Engine } from "engine.io";
import { defineEventHandler } from "h3";
import type { NitroApp } from "nitropack";
import { Server } from "socket.io";
import { z } from "zod";
import { dbClient, dbSchema } from "~/database/drizzle";

export default defineNitroPlugin((nitroApp: NitroApp) => {
  const engine = new Engine();
  const io = new Server();

  io.bind(engine);

  io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on("chat", async (data) => {
      const schema = z.object({
        message: z.string(),
        name: z.string(),
        timestamp: z.coerce.date(),
      });

      const parsedData = schema.safeParse(data);
      if (!parsedData.success) {
        throw new Error(parsedData.error.errors[0].message);
      }

      console.log(`ws: received message: ${JSON.stringify(parsedData.data)}`);

      io.emit("chat", parsedData.data);

      await dbClient.insert(dbSchema.history).values({
        activity: "message",
        message: parsedData.data.message,
        name: parsedData.data.name,
        timestamp: parsedData.data.timestamp,
      });
    });
  });

  nitroApp.router.use(
    "/socket.io/",
    defineEventHandler({
      handler(event) {
        engine.handleRequest(event.node.req, event.node.res);
        event._handled = true;
      },
      websocket: {
        open(peer) {
          const nodeContext = peer.ctx.node;
          const req = nodeContext.req;

          // @ts-expect-error private method
          engine.prepare(req);

          const rawSocket = nodeContext.req.socket;
          const websocket = nodeContext.ws;

          // @ts-expect-error private method
          engine.onWebSocket(req, rawSocket, websocket);
        },
      },
    }),
  );
});
