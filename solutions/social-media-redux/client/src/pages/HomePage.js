import { Link } from 'react-router-dom';
import { memo } from 'react';

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
    </div>
  );
}

export default memo(HomePage);
