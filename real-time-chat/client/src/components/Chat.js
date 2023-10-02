import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { socket } from '../socket';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';
import ConnectionManager from './ConnectionManager';
import { useAuth } from '../provider/authProvider';

function Chat() {
  const { roomId } = useParams() || '1';
  const { currentUser } = useAuth();
  const [text, setText] = useState('');
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
  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = currentUser;

    socket.timeout(5000).emit('message', {
      text,
      uid,
      photoURL,
    });
    setText('');
  }

  return (
    <div className="Chat">
      <ChatHeader />
      <div className="signed-in">
        <h2 className="welcome-message">
          Hello {currentUser.displayName}. Welcome to {roomId}. You are{' '}
          {isConnected ? '' : 'not'} connected
          <span role="img" aria-label="hello">
            👋
          </span>
          <ConnectionManager isConnected={isConnected} />
        </h2>
      </div>
      <div className="chat-messages">
        {messages &&
          messages.map((msg, index) => (
            <ChatMessage key={index} message={msg} currentUser={currentUser} />
          ))}
        <div ref={bottomRef} />
      </div>
      <ChatInput
        text={text}
        setText={setText}
        sendMessage={sendMessage}
        currentUser={currentUser}
      />
      <ChatFooter />
    </div>
  );
}

export default Chat;
