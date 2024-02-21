import { Database } from "bun:sqlite";


const db = new Database("db.sqlite");

export const insert = (key:String, value: String): void =>{
const query = db.query(`
    INSERT INTO short (key, value)
    VALUES (${key}, ${value});
`);

query.run();
}

// db.close();