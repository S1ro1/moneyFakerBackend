import { Elysia, t} from "elysia";
import { db } from "@lib/db/db";

import type { dbType } from "@lib/db/db";
import { transactionCategory } from "@lib/db/schema";

const categoriesGroup = new Elysia({prefix: '/categories'})
    .decorate({'db': db as dbType})

categoriesGroup.get('/', async ({set, db}) => {
    const result = await db.query.transactionCategory.findMany();
    set.status = 200;

    return JSON.stringify(result);

})

categoriesGroup.post('/', async ({set, db, body}) => {
    const result = await db.insert(transactionCategory).values(body).execute();

    set.status = 201;
}, {body: t.Object({name: t.String()})})

export default categoriesGroup;
