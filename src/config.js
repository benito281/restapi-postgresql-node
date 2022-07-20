import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;

//Database enverionment variables
export const PGHOST = process.env.PGHOST || "localhost";
export const PGUSER = process.env.PGUSER || "postgres";
export const PGPASSWORD = process.env.PGPASSWORD || "postgres";
export const PGDATABASE = process.env.PGDATABASE || "database";
export const PGPORT = process.env.PGPORT || 5432;

