function ChatInput({ text, setText, sendMessage }) {
  return (
    <form onSubmit={sendMessage} className="row g-2">
      <div className="col-auto">
        <input
          className="form-control m-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
        />
      </div>
      <div className="col-auto">
        <button className="btn btn-primary m-2" type="submit">
          Send
        </button>
      </div>
    </form>
  );
}

export default ChatInput;
