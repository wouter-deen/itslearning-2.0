import React, {useCallback, useContext} from "react"
import {withRouter, Redirect} from "react-router"
import DB_CONFIG from "./DatabaseConfig"
import {AuthContext} from "./Auth"
import { Button, Grid, Container, CssBaseline, Avatar, Typography, TextField, FormControlLabel, Checkbox, Link, Box, Snackbar} from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Alert from '@material-ui/lab/Alert'


const Login = ({history}) => {
    
    //error snackbar
    const [open, setOpen] = React.useState(false);

    const handleError = () => {
        setOpen(true)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return
        }
        
        setOpen(false)
    }

    //login via firebase
    const handleLogin = useCallback(
        async event => {
            event.preventDefault()
            const {email, password} = event.target.elements
            try {
                await DB_CONFIG
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value)
                history.push("/")
            } catch (error) {
                handleError()
            }
        }, [history]
    )

    const {currentUser} = useContext(AuthContext)

    if(currentUser) {
        return <Redirect to="/"/>
    }

    //copyright notice
    function Copyright() {
        return (
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/about">
               Wouter Deen
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
    }

    //render de pagina
    return(
        <div style={{marginTop: 60}}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div style={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Avatar style={{margin: 1}} backgroundColor="secondary">
                        <LockOutlinedIcon color="secondary"/>
                    </Avatar>

                    <Typography component="h1" variant="h5">
                        ItsLearning 2.0
                    </Typography>

                    <form onSubmit={handleLogin} style={{width: '100%', marginTop: 1}} noValidate>
                        {/*email*/}
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Schoolmail"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />

                        {/*wachtwoord*/}
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Wachtwoord"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        {/*onthouden*/}
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Onthoud mij"
                        />

                        {/*log in button*/}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={{margin: (3, 0, 2)}}
                        >
                            Log in
                        </Button>

                        {/*wachtwoord vergeten*/}
                        <Grid container style={{marginTop: 10}}>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Wachtwoord vergeten?
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>

            {/*error bericht*/}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    De inloggegevens kloppen niet.
                </Alert>
            </Snackbar>
        </div>
    )
}

export default withRouter(Login)