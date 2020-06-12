const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
// const {Pool, Client} = require('pg')
// const parse = require('pg-connection-string');
// const connectionString = parse(process.env.CONNECTION_STRING)

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
    .then((instance) => {
        app.set('db', instance);
        console.log('Db is connected')
    })
    .catch((error) => {
        console.log(`${error}`)
    })

// Attempt at using pg

// const pool = new Pool(connectionString)

// pool.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     pool.end()
//   })

//   const client = new Client(connectionString)

// client.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     client.end()
// })

app.get('/ping', (req, res) => {
    res.send('Oh, Hello!')
})

let port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

// CREATE TABLE user_table (
//     user_id serial,
//     user_email varchar (200),
//     PRIMARY KEY (user_id)
// );

// CREATE TABLE pots_list (
//     pot_id serial,
//     image_url varchar (200),
//     PRIMARY KEY (pot_id)
// )

// CREATE TABLE plants_list (
//     plant_id serial,
//     image_url varchar,
//     time_until_change int,
//     PRIMARY KEY (plant_id)
// )

// CREATE TABLE pots_table (
//     pot_id serial,
//     pot_owner int,
//     pot_appearance int,
//     pot_plant int,
//     pot_watered bool,
//     pot_change_time int,
//     FOREIGN KEY (pot_owner) REFERENCES user_table(user_id),
//     FOREIGN KEY (pot_appearance) REFERENCES pots_list(pot_id),
//     FOREIGN KEY (pot_plant) REFERENCES plants_list(plant_id)
// )