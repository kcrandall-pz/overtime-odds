"use client"

import React from 'react';
import useStore from '../stores/useStore';
import HomeNews from './HomeNews';
import Instructions from 'src/app/components/Introduction';
import dynamic from 'next/dynamic';
// import Login from '../components/Login';

const Login = dynamic(() => import('../components/Login'), {
    ssr: false,
})


const Home = () => {
    const { user, setUser } = useStore();

    return(
        <>
            <h1>Welcome to Overtime Odds</h1>
            {user ? (
                <p className="mt-2">Logged in as {user.display_name}</p>
              ) : (
                <>
                    <Login/>
                    <Instructions/>
                </>
              )}
              <HomeNews/>
        </>
    )
}

export default Home;