import pg from "pg";
const { Pool } = pg;

import { PGHOST,PGDATABASE,PGPASSWORD,PGUSER,PGPORT } from "../config.js";

export const pool = new Pool({
    host: PGHOST,
    user: PGUSER,
    password: PGPASSWORD,
    database: PGDATABASE,
    port: PGPORT
})
