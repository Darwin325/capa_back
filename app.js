import express from "express"
import { seriesRouter } from "./src/routes/series.routes.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api/series", seriesRouter)

app.use((err, req, res, next) => {
  console.error(err)
  return res.status(500).json({ error: "Something went wrong" })
})

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000")
})
