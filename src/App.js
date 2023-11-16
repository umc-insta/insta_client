import Footer from './component/footer';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useHistory } from 'react-router-dom';
import Home from './pages/home/home';
import Add from './pages/add/add';
import Search from './pages/search/search';
import User from './pages/user/user';
import Login from './pages/login/login';
import Assign from './pages/login/assign';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const userInfor = {
    "user_id": "1234",
    "usernickname": "ajoujob",
    "userProfileUrl": "./suzy/suzy_profile.jpeg",
    "username": "사용자이름",
    "posts": [
      {
        "postid": "12345",
        "thumbnail": "thumbnail1.jpg"
      },
      {
        "postid": "12346",
        "thumbnail": "thumbnail2.jpg"
      },
      {
        "postid": "12347",
        "thumbnail": "thumbnail3.jpg"
      },
      {
        "postid": "12348",
        "thumbnail": "thumbnail4.jpg"
      },
      {
        "postid": "12349",
        "thumbnail": "thumbnail5.jpg"
      },
      {
        "postid": "12350",
        "thumbnail": "thumbnail6.jpg"
      }
    ]
  }

  return (
    <div className="App">
      <div style={{ paddingBottom: '5vh' }}>
        <Router>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/add' element={<Add userInfor={userInfor} />} />
            <Route path='/search' element={<Search />} />
            <Route path='/user' element={<User />} />
            <Route path='/' element={<Login setLoginSuccess={setLoginSuccess} />} />
            <Route path='/assign' element={<Assign />} />
          </Routes>
          {loginSuccess &&
            <Footer style={{ height: '5vh' }} />
          }
        </Router>
      </div>
    </div>
  );
}

export default App;
