import React, {useContext} from "react"
import { Route } from "react-router-dom"
import { AuthContext } from "./Auth"
import CircularProgress from "@material-ui/core/CircularProgress"

const PrivateRoute = ({component: RouteComponent, ...rest}) => {

    const {currentUser} = useContext(AuthContext)
    return(
        <Route
        {...rest}
        render={routeProps =>
            !!currentUser ? (
                <RouteComponent {...routeProps} />
            ) : (
                setInterval(function () {
                    if(!!currentUser) {
                        window.location.replace("/login")
                    }
                }, 100)
            )
            }
        />
    )
}

export default PrivateRoute