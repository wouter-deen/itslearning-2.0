import React, { useContext } from "react"
import { AppBar, Toolbar, IconButton, Button, createMuiTheme, ThemeProvider } from "@material-ui/core"
import {AuthContext} from "../Firebase/Auth"
import HomeIcon from "@material-ui/icons/HomeOutlined"

export default function LoggedOutNavBar() {
    const {currentUser} = useContext(AuthContext)

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#ffffff',
              },
        },
      });

    const accountButton = (
        <ThemeProvider theme={theme}>
            <IconButton color="default" variant="outlined" href="/home">
                <HomeIcon/>
            </IconButton>
        </ThemeProvider>        
    )
    
    const loginButton = (
        <ThemeProvider theme={theme}>
            <Button variant="outlined" color="default" href="/login">
                log in
            </Button>
        </ThemeProvider>        
    )

    if(currentUser) {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton href='/'>
                            <img width="60%" height="60%" alt="logo badge" src="/images/logo-badge.svg"/>
                        </IconButton>
    
                        <div style={{flexGrow: 1}}/>
                        {accountButton}
                    </Toolbar>
                </AppBar>
            </div>
        )
    } else {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton href='/'>
                            <img width="60%" height="60%" alt="logo badge" src="/images/logo-badge.svg"/>
                        </IconButton>
    
                        <div style={{flexGrow: 1}}/>
                        {loginButton}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}