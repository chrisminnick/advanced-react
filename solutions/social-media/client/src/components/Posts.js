import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../provider/authProvider.js';

function Posts() {
  const [posts, setPosts] = useState([]);
  const { currentUser, setAuth } = useAuth();
  const { token } = currentUser;
  useEffect(
    function getData() {
      async function fetchPosts() {
        try {
          const response = await fetch('http://localhost:8081/api/posts', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + token,
            },
          });
          const postData = await response.json();
          setPosts(postData.posts);
        } catch (e) {
          console.log(e);
        }
      }
      fetchPosts();
    },
    [token]
  );

  return (
    <>
      <h1>Latest Posts</h1>
      {posts.map((post, index) => (
        <p key={index}>
          <Link to={'/posts/' + post._id}>{post.text}</Link>
        </p>
      ))}
      <Link to="/logout">Log out</Link>
    </>
  );
}

export default Posts;
