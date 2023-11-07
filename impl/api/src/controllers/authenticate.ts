import { Request, Response } from 'express'
import { InMemoryUsersRepository } from '../repositories/in-memory/in-memory-users-repository'
import { AuthenticateUseCase } from '../use-cases/authenticate';
import { SqliteRepository } from '../repositories/sqlite/sqlite-repository';

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body

    const usersRepository = new SqliteRepository();
    const authenticateUseCase = new AuthenticateUseCase(usersRepository)

    const user = await authenticateUseCase.execute({ email, password })

    if (user) {
      return res.status(200).json({
        user: {
          username: user.username,
          email: user.email
        }
      })
    }
  } catch (e) {
    return res.status(500).json({ message: String(e) })
  }
}