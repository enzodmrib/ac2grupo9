import { SeatsRepository } from "../repositories/seats-repository";

export class BookSeatUseCase {
  private seatsRepository: SeatsRepository;

  constructor(seatsRepository: SeatsRepository) {
    this.seatsRepository = seatsRepository
  }

  async execute(id: number) {
    const seat = await this.seatsRepository.getSeatById(id)
    
    if(!seat) {
      throw new Error('Este assento não existe')
    } else if(seat && seat.booked === 1) {
      throw new Error('Este assento já está reservado')
    }

    const bookedSeat = await this.seatsRepository.bookSeatById(id)

    if(!bookedSeat) {
      throw new Error('Erro ao reservar assento')
    }

    return bookedSeat
  }
}