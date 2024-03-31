'use strict';

const express = require('express');
const dotenv = require('dotenv');

dotenv.config()

const PORT = process.env.PORT || 9180;
const HOST = process.env.HOST || localhost;

const app = express();
app.use(express.json());

app.get('/', (_, res) => {
  res.status(200).json('Hello world');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});
