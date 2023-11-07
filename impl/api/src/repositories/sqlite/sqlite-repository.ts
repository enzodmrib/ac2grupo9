import { openDB } from "../../database/db";
import { UsersRepository } from "../users-repository";

export class SqliteRepository implements UsersRepository {

  async findById(id: number): Promise<User | null> {
    const db = await openDB()

    return await db.get('SELECT * FROM users where id = ?', [id]) ?? null
  }
  async findByEmail(email: string): Promise<User | null> {
    const db = await openDB()
    return await db.get('SELECT * FROM users where email = ?', [email]) ?? null
  }
  async create(data: User): Promise<any> {
    const db = await openDB()

    await db.run('INSERT INTO users(username, email, password_hash) values(?, ?, ?)', 
    [data.username, data.email, data.password_hash]
    // [data.id, data.username, data.email, data.password_hash]
    // {
    //   ':id': data.id,
    //   ':username': data.username,
    //   ':email': data.email,
    //   ':password': data.password_hash
    // }
    )
  }
}