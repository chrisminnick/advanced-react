import { useNavigate } from 'react-router-dom';
import { useAuth } from './provider/authProvider';

const Logout = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth();
    navigate('/', { replace: true });
  };

  setTimeout(() => {
    handleLogout();
  }, 3 * 1000);

  return <>Logout Page</>;
};

export default Logout;
