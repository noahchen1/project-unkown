import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './component/Register';
import Login from './component/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
