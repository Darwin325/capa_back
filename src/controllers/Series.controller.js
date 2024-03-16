import { BaseController } from "./BaseController.js"
import { Serie } from "../models/Serie.model.js"

export class SeriesController extends BaseController {
  getAll = async (req, res) => {
    const data = await Serie.getAll()
    return this.successResponse(res, data)
  }

  getById = async (req, res) => {
    const id = req.params.id
    const data = await Serie.getById(id)
    return this.successResponse(res, data)
  }

  create = async (req, res) => {
    const serie = req.body
    const data = await Serie.create(serie)
    const insertData = await Serie.getById(data.insertId)
    return this.successResponse(res, insertData)
  }

  update = async (req, res) => {
    const id = req.params.id
    const serie = req.body
    await Serie.update(id, serie)
    const affected = await Serie.getById(id)
    return this.successResponse(res, affected)
  }

  delete = async (req, res) => {
    const id = req.params.id
    const data = await Serie.delete(id)
    const message = data > 0 ? "Serie deleted" : "Serie not found"
    const status = data > 0 ? 200 : 404
    return this.messageResponse(res, message, status)
  }
}
