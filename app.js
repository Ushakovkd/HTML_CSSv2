const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const md5 = require('md5')
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', 'http://localhost:8080')
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => response.sendFile("index.html"))

app.post('/login', (request, response) => {
    response.send({ userId: md5(request.body.email + request.body.password) })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))