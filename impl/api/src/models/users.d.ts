type User = {
  id: number
  username: string
  email: string
  password_hash: string,
}

type Destination = {
  id: string
  name: string
}

type Seat = {
  id: string
  code: string
  booked: boolean
}

type Flight = {
  id: string
  type: "OUTBOUND" | "RETURN",
  destination: Destination,
  seats: Seat[]
}