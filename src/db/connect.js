import mysql from "mysql2/promise"

const credentials = {
  host: "localhost",
  user: "root",
  password: "123456",
  database: "cap_test",
}

export class Connection {
  static async connect() {
    const connection = await mysql.createConnection(credentials)
    return connection
  }

  static async query(query, params = []) {
    const conn = await this.connect()
    const results = await conn.query(query, params)
    return results
  }
}
