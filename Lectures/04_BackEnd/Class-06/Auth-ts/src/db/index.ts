import "dotenv/config";
// import { drizzle } from "drizzle-orm/node-postgres";
import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";

export const db: NodePgDatabase = drizzle(process.env.DATABASE_URL!);
// export const db = drizzle(process.env.DATABASE_URL!);
