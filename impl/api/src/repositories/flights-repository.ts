export interface FlightsRepository {
  getFlights(): Promise<Flight[] | null>
  getFlightById(id: number): Promise<Flight | null>
}