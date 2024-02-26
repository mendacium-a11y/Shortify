import sqlite3 from 'sqlite3'

const DB_PATH = './database.sqlite'

const db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
        console.error('Database connection error:', err.message)
    } else {
        console.log('Connected to the SQLite database.')
    }
})

export const setUp = () => {
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS links (
        Key TEXT PRIMARY KEY,
        Url TEXT NOT NULL
    )
`

    db.run(createTableQuery, (err) => {
        if (err) {
            console.error('Error creating table:', err)
        } else {
            console.log('Table created successfully')
        }
    })
}

export const insertLink = (url) => {
    try {
        const urlRegex = /^https:\/\/.*\.com$/
        const result = urlRegex.test(url)

        if (result) {
            const key = Math.random().toString(36).slice(2, 8)
            const sqlQuery = 'INSERT INTO links (Key, Url) VALUES (?, ?)'
            db.run(sqlQuery, [key, url], function (err) {
                if (err) {
                    return console.error(err.message)
                }
                console.log(`A row has been inserted with key ${key}`)
            })
            return key
        } else {
            throw new Error('invalid url')
        }
    } catch (error) {
        console.error(error)
    }
}

export const query = (key) => {
    try {
        const keyRegex = /^[a-zA-Z0-9]{6}$/

        const result = keyRegex.test(key)

        if (result) {
            const sqlQuery = 'select * from links where key = ?'
            db.get(sqlQuery, [key], (err, row) => {
                if (err) {
                    return console.error(err.message)
                }
                return row.Url
            })
        } else {
            throw new Error('invalid key')
        }
    } catch (error) {
        console.error(error)
        return error
    }
}

export const shutDown = () => db.close()

setUp()
// insertLink("https://google.com")
// query('sv5swh')
