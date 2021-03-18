import express from 'express'

const app = express();


app.use(express.json())

const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('API is running....')
  })

app.listen(PORT,() => console.log(`Server is running on port ${PORT}`));