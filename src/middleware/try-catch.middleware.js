import { ZodError } from "zod"
import { formatterZodError } from "../schemas/formatter.js"

export const tryCatch = (controller) => async (req, res, next) => {
  try {
    await controller(req, res, next)
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(formatterZodError({ error }))
    }
    next(error)
  }
}
