import { BaseController } from "./BaseController.js"
import { Serie } from "../models/Serie.model.js"
import {
  validateSeries,
  validateSeriesUpdate,
} from "../schemas/series.schema.js"

export class SeriesController extends BaseController {
  getAll = async (req, res) => {
    const { search } = req.query
    const data = await Serie.getAll({ search })
    return this.successResponse(res, data)
  }

  getById = async (req, res) => {
    const id = req.params.id
    const data = await Serie.getById(id)
    return this.successResponse(res, data)
  }

  create = async (req, res) => {
    const serie = req.body
    validateSeries(serie)
    const data = await Serie.create(serie)
    await Serie.attachSerieInterval({
      tv_series_id: data.insertId,
      ...req.body,
    })
    const insertData = await Serie.getById(data.insertId)
    return this.successResponse(res, insertData)
  }

  update = async (req, res) => {
    const id = req.params.id
    const serie = req.body
    validateSeriesUpdate(serie)
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
