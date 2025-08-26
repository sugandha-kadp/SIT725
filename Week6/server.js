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

// Add route
app.get('/add', (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  
  if(isNaN(a) || isNaN(b)) {
    return res.status(400).send("Invalid input");
  }
  const sum = a + b;
  res.send(`The sum of ${a} and ${b} is: ${sum}`);
});

// Subtract route 
app.get('/subtract', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send("Invalid input");
  }
  const difference = a - b;
  res.send(`The difference between ${a} and ${b} is: ${difference}`);
});


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
