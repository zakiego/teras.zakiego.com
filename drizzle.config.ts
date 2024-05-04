import { defineConfig } from "drizzle-kit";
import { ENV } from "./library/env";

export default defineConfig({
  schema: "./database/schema.ts",
  out: "./database/migrations",
  driver: "pg",
  dbCredentials: {
    host: ENV.DATABASE_HOST,
    port: ENV.DATABASE_PORT,
    user: ENV.DATABASE_USER,
    password: ENV.DATABASE_PASSWORD,
    database: ENV.DATABASE_NAME,
  },
});
