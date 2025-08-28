// Connect to the socket server
const socket = io();

// Listen to 'number' event
socket.on('number', (msg) => {
    console.log('Random number:', msg);
    document.getElementById('number').innerText = msg;
});
