import { useState, useEffect } from 'react';
import { useAuth } from '../provider/authProvider.js';

import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [loginErr, setLoginErr] = useState('');
  const { currentUser, setAuth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      navigate('/chat', { replace: true });
    }
  }, [navigate, currentUser]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8081/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: e.target.email.value,
          password: e.target.password.value,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (data.message) {
        setLoginErr(data.message);
      } else {
        setAuth({
          token: data.accessToken,
          uid: data.userId,
          displayName: data.displayName,
        });
      }
    } catch (error) {
      console.error(error);
    }
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
              {loginErr && (
                <div className="alert alert-danger" role="alert">
                  {loginErr}
                </div>
              )}
              <form onSubmit={handleLogin}>
                <div className="form-group mb-3">
                  <label>Email</label>
                  <input type="email" id="email" className="form-control" />
                </div>
                <div className="form-group mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3">
                  <button className="btn btn-primary">Login</button>
                  <Link to="/signup" className="btn m-3">
                    Sign Up
                  </Link>
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
