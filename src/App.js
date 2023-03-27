import './App.css';
import MainPage from './pages/mainPage/mainPage';
import RegisterPage from './pages/registerPage/registerPage';
import AuthPage from './pages/authPage/authPage';
import Navbar from './components/navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <AuthPage />
      <RegisterPage />
    </div>
  );
}

export default App;


