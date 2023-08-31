import React, { useState } from 'react';
import { auth } from './config';
import Chat from './Chat';
import './App.css';
function App() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  return (
    <div className="App">
      {auth.currentUser ? (
        <div className="signed-in">
          <h2>
            Hello {auth.currentUser.displayName}{' '}
            <span role="img" aria-label="hello">
              👋
            </span>
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
