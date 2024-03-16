import z from "zod"
import { formatterZodError } from "./formatter.js"

export const SeriesSchema = z.object({
  title: z.string().min(3).max(255),
  channel: z.string().min(3).max(255),
  gender: z.string().min(3).max(255),
})

export const validateSeries = (data) => {
  const result = SeriesSchema.parse(data)
  return formatterZodError(result)
}

export const validateSeriesUpdate = (data) => {
  const result = SeriesSchema.partial().parse(data)
  return formatterZodError(result)
}
