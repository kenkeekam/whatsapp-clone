import React from 'react'
import './Login.css';
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
    
    const [{}, dispatch] = useStateValue();

    // dispatch = gun. shoot information into data layer.
    // shoots the result of 'user' so we could reuse it at anytime.
    // result = tap into the user from google oauth.
    const signIn = () => {
        auth   
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user, 
                });
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__container">
                <img 
                    src="data:image/jpeg;base64,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"
                    alt=""
                    />
                    <div className="login__text">
                        <h1>Sign in to WhatsApp</h1>
                    </div>

                    <Button onClick={signIn}> Sign In With Google</Button>

            </div>
        </div>
    );
}

export default Login
