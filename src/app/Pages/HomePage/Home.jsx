import React from 'react';
import useStore from '../../stores/useStore';
import { Container } from 'react-bootstrap';
import Login from 'src/app/Components/Login';
import HomeNews from './HomeNews';
import Instructions from 'src/app/Components/Introduction';


const Home = () => {
    const { user, setUser } = useStore();

    return(
        <Container>
            <h1>Welcome to Overtime Odds</h1>
            {user ? (
                <p className="mt-2">Logged in as {user.name}</p>
              ) : (
                <>
                    <Login/>
                    <Instructions/>
                </>
              )}
              <HomeNews/>
        </Container>
    )
}

export default Home;