import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful';
import Course from '../components/Course';

const SPACE_ID = 'se02rp9qe0mu';
const ACCESS_TOKEN = 'Yz-nEg-RlkHTI65vtGaZ0_vbilruFFnxusgH39rwiBc';

const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})

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
                    <div>
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Zoek voor vakken"
                            margin="normal"
                            onChange={this.onSearchInputChange} />
                        <Grid container spacing={24} style={{padding: 24}}>
                            {this.state.courses.map(currentCourse => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Course course={currentCourse}></Course>
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