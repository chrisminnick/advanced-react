function ChatInput({ text, setText, sendMessage }) {
  return (
    <form className="ChatInput" onSubmit={sendMessage}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default ChatInput;
