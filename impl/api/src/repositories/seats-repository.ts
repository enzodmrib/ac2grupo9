export interface SeatsRepository {
  getFlightSeatsByFlightId(id: number): Promise<Seat[] | null>
  bookSeatById(id: number): Promise<Seat | null>
  getSeatById(id: number): Promise<Seat | null>
}