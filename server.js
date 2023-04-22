const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const publicPath = './public';
app.use(express.static(publicPath));
app.get('/', (req, res) => {
});

app.listen(port, () => console.log(`Example app listening on sport ${port}!`));

// Path: package.json

