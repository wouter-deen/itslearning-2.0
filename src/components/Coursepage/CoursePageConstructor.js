import React, { Component } from 'react'
import client from '../../ContentfulClient'
import { Typography } from '@material-ui/core'

class CoursePageConstructor extends Component {
    
    constructor() {
        super()
        this.state = {course: null}
    }
    
    componentDidMount() {
        console.log("1")
        const {params} = this.props
        if(params && params.slug) {
            console.log("2")
            client.getEntries({content_type: 'Course', 'fields.slug': params.slug})
                .then((response) => {
                    console.log("3")
                    console.log(response.items[0])
                    this.setState({course: response.items[0]})
            })
        }
    }

    render() {
        if(!this.state.course) {
            return (
                <Typography>Course page niet gevonden. State: {this.state.course} </Typography>
            );
        } else return(
            <div>
                <h1>hi</h1>
            </div>
        )
    }
}

export default CoursePageConstructor