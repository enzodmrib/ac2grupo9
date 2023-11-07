import { UsersRepository } from "../users-repository";
import { randomUUID } from 'node:crypto'

export class InMemoryUsersRepository implements UsersRepository {
  public items: User[] = []

  async findById(id: string): Promise<User | null> {
    const user = this.items.find((user : User) => id === user.id)

    if(!user) {
      return null
    }

    return user
  }
  async findByEmail(email: string): Promise<User | null> {
    const user = this.items.find((user : User) => {
      console.log({ email, user })
      return email === user.email
    })

    if(!user) {
      return null
    }

    return user
  }
  async create(data: User): Promise<User | null> {
    const { username, email, password_hash } = data
    
    const user = {
      id: randomUUID(),
      username, 
      email,
      password_hash,
      created_at: new Date()
    }

    this.items.push(user)

    return user
  }
}