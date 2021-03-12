// Add port # to proxy in package.json

const express = require('express');

const app = express();

app.use(express.json());

app.listen(3030, () => console.log('Server is running on 3030'))