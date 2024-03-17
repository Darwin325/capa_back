import mysql from "mysql2/promise"
import "dotenv/config"

const credentials = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.USER || "root",
  password: process.env.PASSWORD || "123456",
  database: process.env.DATABASE || "default",
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
