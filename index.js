const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/dashboard.html')
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));