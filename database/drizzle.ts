// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import { Buffer } from "buffer";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import { ENV } from "~/library/env";
import { history } from "./schema";

const pool = new pg.Pool({
  host: ENV.DATABASE_HOST,
  port: ENV.DATABASE_PORT,
  user: ENV.DATABASE_USER,
  password: ENV.DATABASE_PASSWORD,
  database: ENV.DATABASE_NAME,
});

export const dbSchema = {
  history,
};

export const dbClient = drizzle(pool, {
  schema: dbSchema,
});
