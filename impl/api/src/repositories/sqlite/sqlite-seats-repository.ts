import { openDB } from "../../database/db"
import { SeatsRepository } from "../seats-repository"

export class SqliteSeatsRepository implements SeatsRepository {
  async getFlightSeatsByFlightId(id: number): Promise<Seat[] | null> {
    const db = await openDB()

    const seats = await db.all('select * from seat where flight_id = ?', id)

    return seats
  }
  async getSeatById(id: number): Promise<Seat | null> {
    const db = await openDB()
    
    const seat = await db.get('select * from seat where id = ?', id)

    return seat
  }
  async bookSeatById(id: number): Promise<Seat | null> {
    const db = await openDB()
    
    await db.run('UPDATE seat SET booked = 1 where id = ?', id)

    const bookedSeat = await db.get('select * from seat where id = ?', id)

    return bookedSeat
  }
}