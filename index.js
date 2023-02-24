const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.all('/home', (req, res) => {
    console.log("Just got a request!")
    res.send('Zidan')
})

app.listen(process.env.PORT || 3000)
