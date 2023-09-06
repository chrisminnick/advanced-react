function ChatMessage({ message, currentUser }) {
  const { text, uid } = message;
  const messageClass = uid === currentUser.uid ? 'sent' : 'received';
  return (
    <div className={`message ${messageClass}`}>
      <p>{text}</p>
    </div>
  );
}
export default ChatMessage;
