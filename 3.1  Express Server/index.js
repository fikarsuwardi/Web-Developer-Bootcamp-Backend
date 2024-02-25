import express from 'express';

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("<h1>'Hello World!'</h1>");
})

app.get('/tes', function (req, res) {
    return res.send("<h1>Hello Tes Nodemon!</h1>");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})