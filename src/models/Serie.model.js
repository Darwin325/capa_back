import { Connection as db } from "../db/connect.js"
export class Serie {
  static async getAll({ search }) {
    let sql = `SELECT * FROM tv_series_intervals tsi INNER JOIN tv_series ts ON ts.id = tsi.tv_series_id`
    if (search && search.length > 2) {
      sql += ` WHERE title LIKE ?`
    }
    const [results] = await db.query(sql, [`%${search}%`])
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
    await db.query(`DELETE FROM tv_series_intervals WHERE tv_series_id = ?`, [
      id,
    ])
    const [result] = await db.query(`DELETE FROM tv_series WHERE id = ?`, [id])
    console.log(result)
    return result.affectedRows
  }

  static async attachSerieInterval(data) {
    const { tv_series_id, week_day, show_time } = data
    const [result] = await db.query(
      `INSERT INTO tv_series_intervals (tv_series_id, week_day, show_time) VALUES (?, ?, ?)`,
      [tv_series_id, week_day, show_time]
    )
    return result
  }
}
