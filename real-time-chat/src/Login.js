import { useEffect } from 'react';
import { useAuth } from './provider/authProvider.js';

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { currentUser, setAuth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      navigate('/chat', { replace: true });
    }
  }, [navigate, currentUser]);

  const handleLogin = (e) => {
    e.preventDefault();
    setAuth({
      token: '123',
      uid: '123',
      photoURL: 'https://picsum.photos/200',
      displayName: 'Test User',
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card mt-5">
            <div className="card-header">
              <h4>Login</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-group mb-3">
                  <label>Email</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="form-group mb-3">
                  <label>Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="form-group mb-3">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
