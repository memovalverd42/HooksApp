import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

    const { user, onSetUser } = useContext( UserContext );

    return (
        <>
            <h1>Login Page</h1>
            <hr />

            <pre>
                { JSON.stringify( user, null, 3 ) }
            </pre>

            <button 
                className="btn btn-primary"
                onClick={ () => onSetUser({ name: 'Guillermo', loggedIn: false }) }
            >
                Establecer Usuario
            </button>
        </>
    )
}