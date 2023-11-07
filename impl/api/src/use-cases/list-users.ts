import { listUsers } from "../database/users";
import { UsersRepository } from "../repositories/users-repository";

export class ListUsersUseCase {
  private usersRepository: UsersRepository

  constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository
  }

  async execute({ email }) {
    const users = this.usersRepository.findByEmail(email)
  }
}