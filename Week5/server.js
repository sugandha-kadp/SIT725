const express = require('express');
const app = express();
const PORT = 3000;

// Import route
const foodRoute = require('./routes/food');

// Mount route
app.use('/api/food', foodRoute);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
