import sqlite3 from "sqlite3";

const DB_PATH = './database.sqlite';

const db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
        console.error('Database connection error:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

const createTableQuery = `
    CREATE TABLE IF NOT EXISTS links (
        Key TEXT PRIMARY KEY,
        Url TEXT NOT NULL
    )
`;

db.run(createTableQuery, (err) => {
    if (err) {
        console.error('Error creating table:', err);
    } else {
        console.log('Table created successfully');
    }
});

const insertLink = (url) => {
    const key = Math.random().toString(36).slice(2,8);
    const sqlQuery = `INSERT INTO links (Key, Url) VALUES (?, ?)`;
    db.run(sqlQuery, [key, url], function(err) {
      if (err) {
        return console.error(err.message);
      }
      console.log(`A row has been inserted with key ${key}`);
    });
    return key;
}

const query = (key) => {

}

// insertLink("https://google.com")