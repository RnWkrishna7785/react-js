import './App.css'
import {Routes, Route, Navigate} from 'react-router-dom'
import Headers from './componet/Headers.jsx'
import Home from './componet/Home.jsx'
import About from './componet/About.jsx'
import Page404 from './componet/Page404.jsx'
import User from './componet/User.jsx'
import Setting from './componet/Setting.jsx'
import UserDetails from './componet/UserDetails.jsx'
import Admin from './componet/Admin.jsx'
import Protected from './componet/Protected.jsx'
import Login from './componet/Login.jsx'
function App () {
  
  const isAdmin = true; 
  const isAuthenticated = true;
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Protected isAuthenticated={isAuthenticated} />} />

        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About />} />
        
        <Route path='/admin' element={ isAdmin?<Admin />: <Navigate to="/home" />} />
        {/* <Route path="/:id" element={<h1>Welcome dear <User/></h1>} /> */}

        <Route path="/user/:name" element={<User />} >
          <Route index element={<Navigate to="details" replace />} />
          <Route path="settings" element={<Setting isAdmin={isAdmin} />} />
          <Route path="details" element={<UserDetails />} />
        </Route>
        <Route path="*" element={<Page404/>} />
    </Routes>
    </>
  );
}

export default App
