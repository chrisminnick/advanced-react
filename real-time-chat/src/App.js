import AuthProvider from './provider/authProvider';
import Routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  return (
    <AuthProvider>
      <div className="App container">
        <Routes />
      </div>
    </AuthProvider>
  );
}

export default App;
