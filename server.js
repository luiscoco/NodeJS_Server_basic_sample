
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/api/data', (req, res) => {
    res.json({ info: 'Luis Data from backend' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
