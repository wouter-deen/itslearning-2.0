import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import CourseList from './CourseList'

class Homepage extends Component {
    render () {
        return(
            <div>
                <NavBar/>
                <CourseList/>
            </div>  
        )
    }
}

export default Homepage