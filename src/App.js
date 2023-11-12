import Footer from './component/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Add from './pages/add/add';
import Search from './pages/search/search';
import User from './pages/user/user';
import Login from './pages/login/login';
import Assign from './pages/login/assign';

function App() {
  return (
    <div className="App" style={{width: '100%', height: '95vh' }}>
      <Router>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/search' element={<Search />} />
        <Route path='/user' element={<User />} />
        <Route path='/login' element={<Login />} />
        <Route path='/assign' element={<Assign />} />
        </Routes>
      </Router>
      <Footer style={{height: '5vh'}} />
    </div>
  );
}

export default App;
