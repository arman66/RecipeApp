import path from 'path'
import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

app.use(express.json())

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
  console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`)
)

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))
}

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
})
