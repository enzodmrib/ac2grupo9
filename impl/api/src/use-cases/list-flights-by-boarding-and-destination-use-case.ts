import { FlightsRepository } from "../repositories/flights-repository";

export class ListFlightsByBoardingAndDestinationUseCase {
  private flightsRepository: FlightsRepository

  constructor(flightsRepository: FlightsRepository) {
    this.flightsRepository = flightsRepository
  }

  async execute(boardingId: number, destinationId: number) {
    const flights = await this.flightsRepository.getFlightsByBoardingIdAndDestinationId(boardingId, destinationId)

    return flights
  }
}