import {
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";
import { ulid } from "ulidx";

export const activityEnum = pgEnum("activity", ["joined", "left", "message"]);

export const history = pgTable("history", {
  id: text("id").$defaultFn(ulid),
  activity: activityEnum("activity").notNull(),
  name: text("name").notNull(),
  message: text("message"),
  timestamp: timestamp("timestamp").notNull(),
});
