import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import NewPost from './pages/NewPost';
import { signOut } from 'firebase/auth';
import { auth } from './firabase-config';



function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const logoutUser = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        {isAuth && <Link to="/new-post">New Post</Link>}
        {!isAuth ? <Link to="/login">Login</Link> : <button onClick={logoutUser}>Logout</button>}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/new-post" element={<NewPost isAuth={isAuth} />} />
        <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
