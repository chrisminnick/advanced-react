import { Link } from 'react-router-dom';
function ChatFooter() {
  return (
    <div className="Chat-footer">
      <p>copyright &copy; Real Time Chat Company</p>
      <Link to="/logout">Logout</Link>
    </div>
  );
}

export default ChatFooter;
