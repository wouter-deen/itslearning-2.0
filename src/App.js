import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PrivateRoute from './components/Firebase/PrivateRoute'
import Login from './components/Firebase/Login'
import { AuthProvider } from './components/Firebase/Auth'
import Homepage from './components/Homepage/Homepage'
import CoursePage from './components/Coursepage/CoursePage'
import About from './components/PublicPages/LandingPage'
import TestPage from './components/TestPage'

function App() {
    return (
        <AuthProvider>
            <Router>
                <div>
                    <PrivateRoute exact path='/home' component={Homepage}/>
                    <Route exact path='/login' component={Login}/>
                    <PrivateRoute exact path='/course/:slug' component={CoursePage}/>
                    <Route exact path='/' component={About}/>
                    <PrivateRoute exact path='/test' component={TestPage}/>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
