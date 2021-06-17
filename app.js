const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Express Demo App</h1> <h4>Message: Success</h4> <p>version: 1.0.0</p>');
});

app.get('/products', (req, res) => {
    res.send([
        {
            productId: '11',
            price: 100
        },
        {
            productId: '12',
            price: 200
        }
    ]);
});

app.listen(PORT, () => {
    console.log(`Demo app is up and listening to PORT: ${PORT}`);
});