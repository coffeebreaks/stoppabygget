const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.serveFolder(__dirname + '/public');
});

app.listen(port, () => console.log(`Example app listening on sport ${port}!`));

// Path: package.json

