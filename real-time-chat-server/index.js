import { createServer } from 'http';
import { Server } from 'socket.io';
const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

io.on('connection', (socket) => {
  console.log('User connected');
  socket.on('message', (message) => {
    console.log(message.text);
    io.emit('message', message);
  });
  socket.on('disconnect', () => console.log('User disconnected'));
});

io.listen(8081);
