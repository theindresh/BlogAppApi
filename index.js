const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Welcome to Blog Website');
});

app.listen(port, () => {
    console.log(`Server Start http://localhost:${port}`);
});