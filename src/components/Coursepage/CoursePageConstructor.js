import React, { Component } from 'react'
import client from '../../ContentfulClient'
import { Typography } from '@material-ui/core'

class CoursePageConstructor extends Component {
    
    constructor() {
        super()
        this.state = {course: null}
    }
    
    componentDidMount() {
        const {params} = this.props
        if(params && params.slug) {
            client.getEntries({content_type: 'Course', 'fields.slug': params.slug})
                .then((response) => {
                    console.log(response.items[0])
                    this.setState({course: response.items[0]})
            })
        }
    }

    render() {
        if(!this.state.course) {
            return (
                <Typography>Er is een fout opgetreden: de vaksite is niet gevonden. </Typography>
            );
        } else return(
            <div>
                <h1>{this.state.course}</h1>
            </div>
        )
    }
}

export default CoursePageConstructor