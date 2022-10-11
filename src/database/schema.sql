PRAGMA foreign_keys = ON;
-- pragma foreign_keys = on enforces foreign keys. This is usually necessary because by default, SQLite does not enforce foreign keys.

BEGIN;

CREATE TABLE IF NOT EXISTS users (
id INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT,
username TEXT NOT NULL UNIQUE,
hash TEXT,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE IF NOT EXISTS sessions (
id TEXT PRIMARY KEY,
user_id INTEGER REFERENCES users(id),
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
expires_at DATETIME NOT NULL
)

CREATE TABLE IF NOT EXISTS questions (
id INTEGER PRIMARY KEY AUTOINCREMENT,
user_id INTEGER REFERENCES users(id),
topic TEXT NOT NULL,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)

COMMIT;