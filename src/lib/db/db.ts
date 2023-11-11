import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import "dotenv/config";

import * as schema from './schema'
import Elysia from 'elysia';
 
const client = createClient({ url: process.env.DATABASE_URL as string, authToken: process.env.DATABASE_AUTH_TOKEN as string });
 
export const db = drizzle(client, {schema});

export const databaseConfig = new Elysia({ name: "databaseConfig" })
  .decorate('db', () => db);

export type dbType = typeof db;
