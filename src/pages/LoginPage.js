import React from 'react';
import { auth, provider } from '../firabase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setIsAuth }) => {
    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate('/');
        });
    };
    return (
        <div className="loginPage">
            <p>Sign in with Google to continue</p>
            <button className='="login-with-google-btn' onClick={signInWithGoogle}>Sign in wirh Google</button>
        </div>
    )
}

export default LoginPage
