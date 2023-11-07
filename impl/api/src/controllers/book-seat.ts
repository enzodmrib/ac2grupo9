import { SqliteSeatsRepository } from "../repositories/sqlite/sqlite-seats-repository";
import { BookSeatUseCase } from "../use-cases/book-seat-use-case";

export async function bookSeat(req, res) {
  try {
    const { seatId } = req.params

    const seatRepository = new SqliteSeatsRepository()
    const bookSeatUseCase = new BookSeatUseCase(seatRepository)

    const bookedSeat = await bookSeatUseCase.execute(Number(seatId))

    return res.status(200).json({ bookedSeat })
  } catch (e) {
    return res.status(500).json({ message: String(e) })
  }
}