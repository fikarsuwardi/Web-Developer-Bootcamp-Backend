import express from 'express';

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/tes', function (req, res) {
    return res.send('Hello Tes!');
})
ç
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})