/* deze code wordt niet meer gebruikt, maar kan zo weer worden ingezet om een pagina te krijgen waarmee gebruikers een account kunnen aanmaken */

import React, {useCallback} from "react"
import {withRouter} from "react-router"
import DB_CONFIG from "./DatabaseConfig"
import { Button } from "@material-ui/core"

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault()
        const {email, password} = event.target.elements
        try {
            await DB_CONFIG
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
            history.push("/")
        } catch (error) {
            alert(error)
        }
    }, [history])

    return (
        <div>
            <h1>Aanmelden</h1>
            <form onSubmit={handleSignUp}>
                <label>
                    Email
                    <input name="email" type="email" placeholder="Email"/>
                </label>

                <label>
                    Wachtwoord
                    <input name="password" type="password" placeholder="Wachtwoord"/>
                </label>

                <Button type="submit">Aanmelden</Button>
            </form>
        </div>
    )
}

export default withRouter(SignUp)