const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get('/ping', (req, res) => {
    res.send('Oh, Hello!')
})

let port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

