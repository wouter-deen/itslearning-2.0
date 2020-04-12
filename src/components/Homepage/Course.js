import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Course = (props) => {
    return(
        <div>
            {props.course ? (
                <Card >
                    <CardMedia title={props.course.fields.title} />

                    <CardContent>
                        <Typography
                        align="left"
                        gutterBottom
                        variant="headline"
                        component="h2"
                        >
                            {props.course.fields.title}
                        </Typography>

                        <Typography
                        align="left"
                        variant="subtitle2"
                        component="p"
                        >
                            Cluster: {props.course.fields.cluster} <br/> Docent: {props.course.fields.teacher}
                        </Typography>
                    </CardContent>

                    
                    <CardActions>
                        <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        href={"course/" + props.course.fields.slug}>
                            open vaksite
                        </Button>
                    </CardActions>
                </Card>
            ): null}
        </div>
    )
}

export default Course;