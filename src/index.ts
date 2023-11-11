import { Elysia } from "elysia";
import categoriesGroup from "./api/categories";

const app = new Elysia();

app.use(categoriesGroup);

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
