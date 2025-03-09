import { useAuth } from '../context/AuthContext';

function LoginButton() {
  const { login } = useAuth();
  return <button onClick={login}>Login</button>;
}

export default LoginButton;
