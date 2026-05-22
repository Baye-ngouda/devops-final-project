const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', node_env: process.env.NODE_ENV });
});

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the Clean DevOps Backend!', version: '2.0.0' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
