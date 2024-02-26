import express from "express";
import cors from "cors";
import linkRoute from "./db/routes.js";

const app = express()
const port = 3000

app.use(cors())

app.use('/links',linkRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
