import Footer from './component/footer';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Add from './pages/add/add';
import Search from './pages/search/search';
import User from './pages/user/user';
import Login from './pages/login/login';
import Assign from './pages/login/assign';
import UserFeed from './pages/user/userFeed';
import NotFound from './pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState(null);


  return (
    <div className="App">
      <div style={{ paddingBottom: '5vh' }}>
        {user ?
          <Router>
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/add' element={<Add user={user} />} />
              <Route path='/search' element={<Search user={user} />} />
              <Route path='/user' element={<User user={user} />} />
              <Route path='/user/:postId' element={<UserFeed />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer style={{ height: '5vh' }} />
          </Router>
          : 
          <Router>
            <Routes>
              <Route path='/' element={<Login setUser={setUser} />} />
              <Route path='/assign' element={<Assign />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Router>
        }
      </div>
    </div>
  );
}

export default App;
