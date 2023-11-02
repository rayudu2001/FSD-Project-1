import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Workout from './pages/Workouts';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/workouts" element={<Workout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
