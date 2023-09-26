import { useEffect } from 'react';
import { useAuth } from '../../provider/authProvider';
import { useNavigate } from 'react-router-dom';
import { usePosts } from './postsHooks';
import { Post } from './Post';

const Posts = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { posts, isLoading, error, getPosts } = usePosts();

  useEffect(() => {
    if (!currentUser) {
      navigate('/login', { replace: true });
    } else {
      getPosts();
    }
  }, [currentUser, navigate, getPosts]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card mt-5">
            <div className="card-header">
              <h4>Posts</h4>
            </div>
            <div className="card-body">
              {posts.map((post) => (
                <Post key={post._id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
