import React, { useState, useEffect } from 'react';
import ConnectionManager from './ConnectionManager';
import { socket } from './socket';
import { auth } from './config';
import Chat from './Chat';
import './App.css';
function App() {
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(socket.connected);
  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function receiveMessage(value) {
      setMessages((messages) => [...messages, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('message', receiveMessage);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('message', receiveMessage);
    };
  }, []);
  return (
    <div className="App">
      {auth.currentUser ? (
        <div className="signed-in">
          <h2 className="welcome-message">
            Hello {auth.currentUser.displayName} You are{' '}
            {isConnected ? '' : 'not'} connected
            <span role="img" aria-label="hello">
              👋
            </span>
            <ConnectionManager />
          </h2>
          <Chat auth={auth} messages={messages} setMessages={setMessages} />
        </div>
      ) : (
        <div className="signed-out">
          <h2>Sign in to join the chat</h2>
        </div>
      )}
    </div>
  );
}

export default App;
