import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()



app.use(express.json())

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('API is running....')
})


app.listen(PORT, () => console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`))
