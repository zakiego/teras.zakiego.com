import { migrate } from "drizzle-orm/node-postgres/migrator";
import { dbClient } from "./drizzle";

const main = async () => {
  await migrate(dbClient, {
    migrationsFolder: "database/migrations",
  })
    .then(() => {
      console.log("Database migrations done");
    })
    .catch((err) => {
      console.error("Database migrations failed", err);
    });
};

main().finally(() => {
  process.exit();
});
