import AuthProvider from './provider/authProvider';
import Routes from './routes';
import Chat from './Chat';
import './App.css';
function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes />
      </div>
    </AuthProvider>
  );
}

export default App;
