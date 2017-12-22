require('dotenv').config();
require('dotenv').load();

const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db/index');
const router = require('./routes/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  allowedHeaders: 'Content-Type,Authorization',
  methods: ['GET, POST, PUT, DELETE, OPTIONS'],
}));
app.use('/', router);


app.listen(process.env.API_PORT, () => {
  console.log('LISTENING AT PORT:', process.env.API_PORT);
});
