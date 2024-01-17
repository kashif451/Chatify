import './App.css';
import Routes from './components/routes';
import AuthProvider from './context/Auth';

function App() {
  return (
   <>
   <AuthProvider>
    <Routes/>
   </AuthProvider>
   </>
  );
}

export default App;
