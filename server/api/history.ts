import { asc, desc, eq } from "drizzle-orm";
import { dbClient, dbSchema } from "~/database/drizzle";

export default defineEventHandler(async (event) => {
  // const deleteEmpty = await dbClient
  //   .delete(dbSchema.history)
  //   .where(eq(dbSchema.history.message, ""));

  const data = await dbClient.query.history.findMany({
    orderBy: desc(dbSchema.history.timestamp),
    limit: 200,
  });

  return data.reverse();
});
