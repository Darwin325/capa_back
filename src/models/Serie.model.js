import { Connection as db } from "../db/connect.js"
export class Serie {
  static async getAll() {
    const [results] = await db.query("SELECT * FROM tv_series")
    return results
  }

  static async getById(id) {
    const [results] = await db.query(`SELECT * FROM tv_series WHERE id = ?`, [
      id,
    ])
    return results
  }

  static async create(serie) {
    const { title, channel, gender } = serie
    const [result] = await db.query(
      `INSERT INTO tv_series (title, channel, gender, created_at, updated_at) VALUES (?, ?, ?, NOW(), NOW())`,
      [title, channel, gender]
    )
    return result
  }

  static async update(id, serie) {
    const { title, channel, gender } = serie
    const params = []
    let sql = `UPDATE tv_series SET `
    if (title) {
      sql += `title = ?, `
      params.push(title)
    }
    if (channel) {
      sql += `channel = ?, `
      params.push(channel)
    }
    if (gender) {
      sql += `gender = ?, `
      params.push(gender)
    }
    sql += `updated_at = NOW() WHERE id = ?`
    const [result] = await db.query(sql, [...params, id])
    return result
  }

  static async delete(id) {
    const [result] = await db.query(`DELETE FROM tv_series WHERE id = ?`, [id])
    return result.affectedRows
  }
}
