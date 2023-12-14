function ChatMessage({ message, currentUser }) {
  const { text, uid } = message;
  const messageClass = uid === currentUser.uid ? 'sent' : 'received';
  console.log(`${text} ${uid}`);
  return (
    <div className={`message ${messageClass}`}>
      <p>{text}</p>
    </div>
  );
}
export default ChatMessage;
