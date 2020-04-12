import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PrivateRoute from './components/Firebase/PrivateRoute'
import Login from './components/Firebase/Login'
import { AuthProvider } from './components/Firebase/Auth'
import Homepage from './components/Homepage/Homepage'
import CoursePage from './components/Coursepage/CoursePage'
import About from './components/PublicPages/About'

function App() {
 return (
   <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path='/' component={Homepage}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/course/:slug' component={CoursePage}/>
          <Route exact path='/about' component={About}/>
        </div>
      </Router>
   </AuthProvider>
  );
}

export default App;
