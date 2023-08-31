import { useState, useEffect, useRef } from 'react';
import { socket } from './socket';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';

function Chat({ auth, messages, setMessages }) {
  const [text, setText] = useState('');
  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

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
      <div className="Chat-messages">
        {messages &&
          messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} auth={auth} />
          ))}
        <div ref={bottomRef} />
      </div>
      <ChatInput text={text} setText={setText} sendMessage={sendMessage} />
      <ChatFooter />
    </div>
  );
}

export default Chat;
