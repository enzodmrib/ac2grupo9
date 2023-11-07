import { Request, Response } from 'express'
import { InMemoryUsersRepository } from '../repositories/in-memory/in-memory-users-repository';
import { RegisterUseCase } from '../use-cases/register';
import { SqliteRepository } from '../repositories/sqlite/sqlite-repository';

export async function createUser(req: Request, res: Response) {
  try {
    const { username, email, password } = req.body;

    const inMemoryUsersRepository = new SqliteRepository()
    const registerUseCase = new RegisterUseCase(inMemoryUsersRepository)

    await registerUseCase.execute({ username, email, password })
  } catch (e) {
    return res.status(500).json({ message: String(e) })
  }

  return res.status(201).send()
}