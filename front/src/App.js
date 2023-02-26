import './assets/styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Registration from './pages/Registration';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="signup" element={<Registration/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
