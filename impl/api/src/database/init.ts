import { openDB } from "./db";

export async function initDB() {
  const db = await openDB()

  await db.get("PRAGMA foreign_keys = ON")

  await db.run('CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY, username TEXT, email TEXT, password_hash TEXT)');

  await db.run('CREATE TABLE IF NOT EXISTS place (id INTEGER PRIMARY KEY, name TEXT)')

  await db.run('CREATE TABLE IF NOT EXISTS flight (id INTEGER PRIMARY KEY, type TEXT CHECK( type IN (\'OUTBOUND\', \'RETURN\')), boarding_location_id INTEGER, destination_id INTEGER, FOREIGN KEY (boarding_location_id) REFERENCES place, FOREIGN KEY (destination_id) REFERENCES place)')

  await db.run('CREATE TABLE IF NOT EXISTS seat (id INTEGER PRIMARY KEY, code TEXT, booked BOOLEAN, flight_id INTEGER, FOREIGN KEY (flight_id) REFERENCES flight)')

  const existingUserRecords = await db.all('select * from user')

  if (existingUserRecords.length === 0) {
    await db.run('INSERT INTO user (username, email, password_hash) values(?, ?, ?)', ['user', 'user@email.com', '$2b$10$FOSVhIqa4NboOX/L8eyONOKKlpJbfhguQhgjmwWjMvGdij85Grlu.'])
  }

  const existingPlaceRecords = await db.all('select * from place where name in(?, ?, ?)', ['São paulo', 'Rio de Janeiro', 'Recife'])

  if (existingPlaceRecords.length === 0) {
    await db.run('INSERT INTO place (name) values(?)', 'São paulo')
    await db.run('INSERT INTO place (name) values(?)', 'Rio de Janeiro')
    await db.run('INSERT INTO place (name) values(?)', 'Recife')
  }

  const existingFlightRecords = await db.all('select * from flight')

  if (existingFlightRecords.length === 0) {
    await db.run('INSERT INTO flight (type, boarding_location_id, destination_id) values(?, ?, ?)', ['OUTBOUND', 1, 2])
    await db.run('INSERT INTO flight (type, boarding_location_id, destination_id) values(?, ?, ?)', ['RETURN', 2, 1])

    await db.run('INSERT INTO flight (type, boarding_location_id, destination_id) values(?, ?, ?)', ['OUTBOUND', 1, 3])
    await db.run('INSERT INTO flight (type, boarding_location_id, destination_id) values(?, ?, ?)', ['RETURN', 3, 1])

    await db.run('INSERT INTO flight (type, boarding_location_id, destination_id) values(?, ?, ?)', ['OUTBOUND', 2, 3])
    await db.run('INSERT INTO flight (type, boarding_location_id, destination_id) values(?, ?, ?)', ['RETURN', 3, 2])
  }

  const existingSeatRecords = await db.all('select * from seat')

  if (existingSeatRecords.length === 0) {
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A1', false, 1])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A2', false, 1])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A3', false, 1])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A4', false, 1])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A5', false, 1])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A6', false, 1])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A7', false, 1])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A8', false, 1])

    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A1', false, 2])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A2', false, 2])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A3', false, 2])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A4', false, 2])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A5', false, 2])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A6', false, 2])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A7', false, 2])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A8', false, 2])

    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A1', false, 3])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A2', false, 3])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A3', false, 3])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A4', false, 3])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A5', false, 3])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A6', false, 3])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A7', false, 3])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A8', false, 3])

    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A1', false, 4])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A2', false, 4])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A3', false, 4])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A4', false, 4])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A5', false, 4])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A6', false, 4])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A7', false, 4])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A8', false, 4])

    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A1', false, 5])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A2', false, 5])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A3', false, 5])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A4', false, 5])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A5', false, 5])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A6', false, 5])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A7', false, 5])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A8', false, 5])

    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A1', false, 6])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A2', false, 6])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A3', false, 6])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A4', false, 6])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A5', false, 6])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A6', false, 6])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A7', false, 6])
    await db.run('INSERT INTO seat(code, booked, flight_id) values(?, ?, ?)', ['A8', false, 6])
  }

  const tables = await db.all("select name from sqlite_master where type='table'");

  console.log({ tables })

  const users = await db.all("select * from user")

  console.log({ users })

  const places = await db.all('select * from place')

  console.log({ places })

  const flights = await db.all('select * from flight')

  console.log({ flights })

  const seats = await db.all('select * from seat')

  console.log({ seats })
}