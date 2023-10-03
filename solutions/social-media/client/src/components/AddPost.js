import { useState } from 'react';
import { useAuth } from '../provider/authProvider.js';

function AddPost(props) {
  const { currentUser } = useAuth();
  const { token } = currentUser;

  const [postText, setPostText] = useState('');

  async function submitPost() {
    try {
      await fetch('http://localhost:8081/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({ text: postText }),
      });
      setPostText('');
      props.setPosts([...props.posts, postText]);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <h2>Add a new post</h2>
      <input
        type="text"
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
      />
      <button onClick={submitPost}>Submit Post</button>
    </div>
  );
}
export default AddPost;
