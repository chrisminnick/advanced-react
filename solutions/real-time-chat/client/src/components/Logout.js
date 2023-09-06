import { useNavigate } from 'react-router-dom';
import { useAuth } from '../provider/authProvider';

const Logout = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth();
    navigate('/', { replace: true });
  };

  handleLogout();

  return <>Logout Page</>;
};

export default Logout;
