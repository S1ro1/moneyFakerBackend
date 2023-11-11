import { text, sqliteTable, integer, primaryKey } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
 
export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  age: integer('age').notNull().default(0),
});

export const userRelations = relations(users, ({ many }) => ({
  usersToTransactions: many(usersToTransactions)
}));

export const transactions = sqliteTable('transactions', {
  id: integer('id').primaryKey(),
  amount: integer('amount').notNull(),
  type: text('type').notNull(),
});

export const transactionRelations = relations(transactions, ({ many }) => ({
  usersToTransactions: many(usersToTransactions)
}));

export const usersToTransactions = sqliteTable('users_to_transactions', {
		userId: integer('user_id').notNull().references(() => users.id),
		transactionId: integer('transaction_id').notNull().references(() => transactions.id),
	}, (t) => ({
		pk: primaryKey({columns: [t.userId, t.transactionId]}),
	}),
);

export const usersToTransactionsRelations = relations(usersToTransactions, ({ one }) => ({
	transaction: one(transactions, {
		fields: [usersToTransactions.transactionId],
		references: [transactions.id],
	}),
	user: one(users, {
		fields: [usersToTransactions.userId],
		references: [users.id],
	}),
}));


