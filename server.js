const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/', (req, res) => {
    const publicPath = path.join(__dirname, 'public');
    app.use(express.static(publicPath));
});

app.listen(port, () => console.log(`Example app listening on sport ${port}!`));

// Path: package.json

