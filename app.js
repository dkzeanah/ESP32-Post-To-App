const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let receivedData = {}; // Object to store the received data

app.post('/endpoint', (req, res) => {
  console.log('Received data:', req.body);
  receivedData = req.body; // Store the received data
  res.status(200).send('Data received');
});

// Add a GET endpoint to serve the received data
app.get('/data', (req, res) => {
  res.json(receivedData);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.use(express.static('public')); // Serve static files from the 'public' directory

