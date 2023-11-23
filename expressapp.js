const express = require('express')
const app = express()
const port = 7000


app.get('/home', (req, res) => {
  const data = fs.readFileSync('gym.html')
  })
app.get('/About us', (req, res) => {
   const data = fs.readFileSync('About gym.html')
  })
  app.get('/Contact us', (req, res) => {
    const data = fs.readFileSync('contact.html')
  })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})