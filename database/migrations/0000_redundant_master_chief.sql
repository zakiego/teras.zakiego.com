DO $$ BEGIN
 CREATE TYPE "activity" AS ENUM('joined', 'left', 'message');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "history" (
	"id" text,
	"activity" "activity" NOT NULL,
	"name" text NOT NULL,
	"message" text,
	"timestamp" timestamp NOT NULL
);
