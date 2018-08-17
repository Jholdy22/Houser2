const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const controller = require('./controller')
require('dotenv').config()
const massive = require('massive')

massive(process.env.CONNECTION_STRING).then(function(db) {
    app.set('db', db)
}).catch(err => console.log(err))

app.use(bodyParser.json())

app.get('/api/inventory', controller.getAll)
app.get('/api/inventories/:id', controller.getOne)
app.delete('/api/house/:id', controller.delete)
app.post('/api/house', controller.create)


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`I will start over on ${PORT}`)
})