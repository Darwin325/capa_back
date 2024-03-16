import fs from "node:fs"
import path from "node:path"
import { Connection as db } from "./connect.js"

const exec = async () => {
  fs.readFile(
    path.resolve("src/db") + "/db.sql",
    "utf-8",
    async (err, data) => {
      if (err) {
        console.log(err)
        return
      }

      const sentences = data.split(";")
      try {
        for (let i = 0; i < sentences.length; i++) {
          if (sentences[i].trim() !== "") {
            await db.query(sentences[i])
          }
        }
        console.log("Database created successfully")
      } catch (err) {
        console.log(err)
      }
    }
  )
}

exec()
