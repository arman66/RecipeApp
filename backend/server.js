const express = require('express')
const fetch = require('node-fetch')

const app = express()

const APIKEY = '37fab99e028f4939966406cf0b08ff4d'

app.use(express.json())

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('API is running....')
})

app.get('/recipe', async (req, res) => {
  const api_url =
    'https://api.spoonacular.com/recipes/random?number=1&apiKey=37fab99e028f4939966406cf0b08ff4d'

  const fetch_res = await fetch(api_url)
  const data = await fetch_res.json()
  // res.json(data.recipes[0].title)
  res.json(data)

  console.log(data.recipes[0].id)
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
