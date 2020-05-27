import React from "react";
import PropTypes from "prop-types";
import {Card, CardContent, CardMedia, Typography, Button, Container, Grid, makeStyles, Link, CssBaseline} from "@material-ui/core";
import LoggedOutNavBar from "../NavBar/GeneralNavBar"

const useStyles = makeStyles((theme) => ({
	icon: {
	  marginRight: theme.spacing(2),
	},
	heroContent: {
	  backgroundColor: theme.palette.background.paper,
	  padding: theme.spacing(8, 0, 6),
	},
	heroButtons: {
	  marginTop: theme.spacing(4),
	},
	cardGrid: {
	  paddingTop: theme.spacing(8),
	  paddingBottom: theme.spacing(8),
	},
	card: {
	  height: '100%',
	  display: 'flex',
	  flexDirection: 'column',
	},
	cardMedia: {
	  paddingTop: '56.25%', // 16:9
	},
	cardContent: {
	  flexGrow: 1,
	},
	footer: {
	  backgroundColor: theme.palette.background.paper,
	  padding: theme.spacing(6),
	},
  }));
  
//copyright notice
function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
		{'Copyright © '}
		<Link color="inherit" href="https://github.com/wouter-deen" target="_blank">
			Wouter Deen
		</Link>{' '}
		{new Date().getFullYear()}
		{'.'}
		</Typography>
	);
}

function About(props) {
	const classes = useStyles();
	return (
		<React.Fragment>
			<CssBaseline />

			<LoggedOutNavBar/>

			<main>
				{/* Header */}
				<div className={classes.heroContent}>
					<Container maxWidth="sm">
						<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
							ItsLearning 2.0
						</Typography>
						<Typography variant="h5" align="center" color="textSecondary" paragraph>
							Alles wat vertrouwd voelt vanuit het originele itslearning, in een nieuw jasje gestopt.
							Eenvoudig te gebruiken: van ICT-beheerder en docent tot leerling. Keep on learning. ItsLearning.
						</Typography>
						<div className={classes.heroButtons}>
						<Grid container spacing={2} justify="center">
							<Grid item>
							<Button variant="contained" color="primary" href="https://github.com/wouter-deen/itslearning-2.0/blob/master/README.md" target="_blank" size="large">
								meer informatie
							</Button>
							</Grid>
							<Grid item>
							<Button variant="outlined" color="default" href="/login" size="large">
								log in
							</Button>
							</Grid>
						</Grid>
						</div>
					</Container>
				</div>
				<Container className={classes.cardGrid} maxWidth="md">
				{/* Einde header */}

					{/* feature cards */}
					<Grid container spacing={4}>
						{/* snel */}
						<Grid item xs={12} sm={6} md={4}>
							<Card className={classes.card}>
								<CardMedia
									className={classes.cardMedia}
									image="/images/LandingPageImages/speed.png"
									title="Image title"
								/>
								<CardContent className={classes.cardContent}>
									<Typography gutterBottom variant="h5" component="h2">
										Snel
									</Typography>
									<Typography>
										Vele malen sneller dan dat je gewend bent van itslearning, door het gebruik van nieuwere, efficiëntere technieken.
									</Typography>
								</CardContent>
							</Card>
						</Grid>

						{/* React.JS */}
						<Grid item xs={12} sm={6} md={4}>
							<Card className={classes.card}>
								<CardMedia
									className={classes.cardMedia}
									image="/images/LandingPageImages/react-logo.png"
									title="Image title"
								/>
								<CardContent className={classes.cardContent}>
									<Typography gutterBottom variant="h5" component="h2">
										React
									</Typography>
									<Typography>
										Hoe kan dat zo snel? Wij gebruiken React.JS, een zeer lichte en efficiënte JavaScript library voor single page applications.
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						
						{/* Material-UI */}
						<Grid item xs={12} sm={6} md={4}>
							<Card className={classes.card}>
								<CardMedia
									className={classes.cardMedia}
									image="/images/LandingPageImages/material-ui.png"
									title="Image title"
								/>
								<CardContent className={classes.cardContent}>
									<Typography gutterBottom variant="h5" component="h2">
										Material-UI
									</Typography>
									<Typography>
										Bovendien gebruiken we Material-UI, een framework die voldoet aan alle Material Design eisen. De interface ziet er dus eenvoudig uit en is makkelijk te gebruiken.
									</Typography>
								</CardContent>
							</Card>
						</Grid>

						{/* nog niks */}
						<Grid item xs={12} sm={6} md={4}>
							<Card className={classes.card}>
								<CardMedia
									className={classes.cardMedia}
									image="https://source.unsplash.com/random"
									title="Image title"
								/>
								<CardContent className={classes.cardContent}>
									<Typography gutterBottom variant="h5" component="h2">
										Informatica is cool
									</Typography>
									<Typography>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									</Typography>
								</CardContent>
							</Card>
						</Grid>

						{/* nog niks */}
						<Grid item xs={12} sm={6} md={4}>
							<Card className={classes.card}>
								<CardMedia
									className={classes.cardMedia}
									image="https://source.unsplash.com/random"
									title="Image title"
								/>
								<CardContent className={classes.cardContent}>
									<Typography gutterBottom variant="h5" component="h2">
										Ik kan niks verzinnen
									</Typography>
									<Typography>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									</Typography>
								</CardContent>
							</Card>
						</Grid>

						{/* nog niks */}
						<Grid item xs={12} sm={6} md={4}>
							<Card className={classes.card}>
								<CardMedia
									className={classes.cardMedia}
									image="https://source.unsplash.com/random"
									title="Image title"
								/>
								<CardContent className={classes.cardContent}>
									<Typography gutterBottom variant="h5" component="h2">
										Erg jammer weer dit
									</Typography>
									<Typography>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Container>
			</main>

			{/* footer */}
			<footer className={classes.footer}>
				<Typography variant="h6" align="center" gutterBottom>
					Dit is ItsLearning 2.0
				</Typography>
				<Typography variant="subtitle1" align="center" color="textSecondary" component="p">
					Dit prototype is in geen enkele vorm geassocieerd met itslearning.
				</Typography>
				<Copyright />
			</footer>
			{/* einde footer */}
		</React.Fragment>
	)
}

About.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object
};

export default About