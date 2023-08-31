function ChatMessage({ message, auth }) {
  const { text, uid, photoURL } = message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  return (
    <div className={`message ${messageClass}`}>
      <p>{text}</p>
    </div>
  );
}
export default ChatMessage;
