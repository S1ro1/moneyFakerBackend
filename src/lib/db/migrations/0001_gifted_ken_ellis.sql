CREATE TABLE `transactions` (
	`id` integer PRIMARY KEY NOT NULL,
	`amount` integer NOT NULL,
	`type` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `users_to_transactions` (
	`user_id` integer NOT NULL,
	`transaction_id` integer NOT NULL,
	PRIMARY KEY(`transaction_id`, `user_id`),
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`transaction_id`) REFERENCES `transactions`(`id`) ON UPDATE no action ON DELETE no action
);
