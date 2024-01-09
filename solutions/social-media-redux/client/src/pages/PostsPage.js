import { Link, useParams } from 'react-router-dom';

function Posts() {
  const [postId] = useParams();
  return (
    <div>
      <h1>Post {postId}</h1>
      <Link to="/logout">Log out</Link>
    </div>
  );
}

export default Posts;
