
const express = require('express');
const app = express();
const http = require('http').createServer(app); // Create HTTP server from app
const io = require('socket.io')(http); // Pass http server to socket.io
const PORT = 3000;


// Serve static files from the 'public' directory
app.use(express.static('public'));

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


// Socket.io connection logic
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  setInterval(() => {
    socket.emit('number', parseInt(Math.random() * 10));
  }, 1000);
});

http.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
