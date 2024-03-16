import express from "express"
import { tryCatch } from "../middleware/try-catch.middleware.js"
import { SeriesController } from "../controllers/Series.controller.js"

const seriesController = new SeriesController()
export const seriesRouter = express.Router()

seriesRouter.get("/", tryCatch(seriesController.getAll))
seriesRouter.get("/:id", tryCatch(seriesController.getById))
seriesRouter.post("/", tryCatch(seriesController.create))
seriesRouter.put("/:id", tryCatch(seriesController.update))
seriesRouter.delete("/:id", tryCatch(seriesController.delete))
