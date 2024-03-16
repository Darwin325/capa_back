import fs from "node:fs"
import path from "node:path"
import { Connection as db } from "./connection.ts"
import { exit } from "node:process"

const getDb = async () => {
  const [results] = await db.query("SELECT * FROM tv_series")
  console.log(results)
}
getDb()
exit()
fs.readFile(path.resolve("src/db") + "/db.sql", "utf-8", async (err, data) => {
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
})
