import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Course from './Course';
import client from '../../ContentfulClient';

class CourseList extends Component {
    state = {
        courses: [],
        searchString: ''
    }

    constructor() {
        super()
        this.getCourses()
    }

    getCourses = () => {
        client.getEntries({
            content_type: 'course',
            query: this.state.searchString
        })
        .then((response) => {
            this.setState({courses: response.items})
        })
        .catch((error) => {
            console.log("Error occured while fetching data from Contentful");
            console.log(error);
        })
    }

    onSearchImputChange = (event) => {
        if(event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getCourses()
    }

    render() {
        return (
            <div>
                {this.state.courses ? (
                    <div  style={{marginLeft: 20, marginRight: 20, marginTop: 30}}>
                        <Grid container spacing={3} justify="center">
                            {this.state.courses.map(currentCourse => (
                                <Grid item xs={12} sm={4} lg={3} xl={2}>
                                    <Course course={currentCourse}/>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "Geen vakken gevonden."}
            </div>
        )
    }
}

export default CourseList;