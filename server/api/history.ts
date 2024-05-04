import { asc, desc } from "drizzle-orm";
import { dbClient, dbSchema } from "~/database/drizzle";

export default defineEventHandler(async (event) => {
  const data = await dbClient.query.history.findMany({
    orderBy: desc(dbSchema.history.timestamp),
    limit: 200,
  });

  return data.reverse();
});
