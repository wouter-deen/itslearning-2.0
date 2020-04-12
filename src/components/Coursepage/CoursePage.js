import React, { Component } from 'react'
import CoursePageConstructor from './CoursePageConstructor'
import NavBar from '../NavBar/NavBar'

class Homepage extends Component {
    render () {
        return(
            <div>
                <NavBar/>
                <CoursePageConstructor/>
            </div>  
        )
    }
}

export default Homepage