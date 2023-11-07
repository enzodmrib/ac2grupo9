import { openDB } from "./db";

export async function initDB() {
  const db = await openDB()

  await db.run('CREATE TABLE IF NOT EXISTS users (id INT, username TEXT, email TEXT, password_hash TEXT)');

  const tables = await db.all("select name from sqlite_master where type='table'");

  console.log(tables)

  const users = await db.all("select * from users")

  console.log(users)
}