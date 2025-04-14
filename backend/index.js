const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express backend!' });
  console.log(`Called '/api'`)
});

app.get('/test', (req, res) => {
  res.json({ message: 'Hello from Express backend!' });
  console.log(`Called '/api/test'`)
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running on port ${PORT}`);
});
