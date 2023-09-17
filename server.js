const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

app.use(express.static('public'));

app.get('/hello', (req, res) => {
    res.send('Hello, World!');
});

app.get('/budget', (req, res) => {
    fs.readFile('budg-data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            const budget = JSON.parse(data);
            res.json(budget);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
