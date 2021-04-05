import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

const APIKEY = '37fab99e028f4939966406cf0b08ff4d'

app.use(express.json())

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('API is running....')
})


app.listen(PORT, () => console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`))
