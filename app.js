const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes'))

// app.use('/', require('./routes/variables.routes'))

const PORT = config.get('PORT') || 5000

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })

    app.get('/', (req, res) => {
      res.send('<h1>Server is running</h1>')
    })

    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`)
    })
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()
