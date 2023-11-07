import { openDB } from "../database/db"

export async function listUsers(req, res) {
  const db = await openDB()
  const users = await db.all('select * from users')

  return res.status(200).json({ users })
}