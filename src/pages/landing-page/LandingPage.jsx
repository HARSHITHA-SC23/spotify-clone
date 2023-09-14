import React, { useEffect, useState } from 'react';
import TopBar from '../../components/header/TopBar';
import './landing_page.scss';
import { Button, Typography } from '@mui/material';
import { ReactComponent as Logo } from '../../assets/Spotify.svg';
import { loginUrl } from '../../constants';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    const [authToken, setAuthToken] = useState("");

    const handleAfterLogin = () => {
        navigate(`/playlist`)
    }
    useEffect(() => {
        const hash = window.location.hash
        let authToken = window.localStorage.getItem('authToken')

        if (!authToken && hash) {
            console.log(authToken, hash);
            authToken = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("authToken", authToken)
        }
        setAuthToken(authToken)
    })

    return (
        <div className='landingMain'>
            <div className='landingSub'>
                <Logo style={{ width: '30em', height: 'auto' }} />
                {!authToken ?
                    (<Button className='topbarLogin'><a href={loginUrl}><Typography variant='l1'>LOGIN</Typography></a></Button>) :
                    (handleAfterLogin)
                }
            </div>
        </div>
    )
}

export default LandingPage