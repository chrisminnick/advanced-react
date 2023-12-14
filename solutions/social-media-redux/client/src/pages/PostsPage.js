import { Link } from 'react-router-dom';
import { PureComponent } from 'react';

class Posts extends PureComponent {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        <Link to="/logout">Log out</Link>
      </div>
    );
  }
}

export default Posts;
