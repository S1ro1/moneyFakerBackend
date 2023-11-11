import { migrate } from "drizzle-orm/libsql/migrator";
import { db } from "@lib/db/db";

migrate(db, { migrationsFolder: "./src/lib/db/migrations" })
  .then(() => {
    console.log("Migrations completed!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Migrations failed!", err);
    process.exit(1);
  });
