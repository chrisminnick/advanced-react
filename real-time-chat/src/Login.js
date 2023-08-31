import { useAuth } from './provider/authProvider.js';

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    setAuth({
      token: '123',
      uid: '123',
      photoURL: 'https://picsum.photos/200',
      displayName: 'Test User',
    });
    navigate('/chat', { replace: true });
  };

  setTimeout(() => {
    handleLogin();
  }, 3 * 1000);

  return <>Login Page</>;
};

export default Login;
