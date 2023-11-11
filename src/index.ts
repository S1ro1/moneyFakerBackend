import { Elysia } from "elysia";

import { db } from "./lib/db/db";
import { users } from "@lib/db/schema";

const app = new Elysia().get("/posts", async () => {
  const cities = await db.query.users.findMany();

  return JSON.stringify(cities);
}).post("/posts", async() => {

  await db.insert(users).values({"name": "New user", age: 20}).execute();

  return "Succesfully create user";
}).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
