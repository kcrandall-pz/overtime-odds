"use client";
import useStore from './stores/useStore';
import { Button, Container } from 'react-bootstrap';

const HomePage = () => {
  const { user, setUser } = useStore();

  return (
    <Container className="p-4">
      <h1 className="text-2xl font-bold">Welcome to Overtime Odds</h1>
      {user ? (
        <p className="mt-2">Logged in as {user.name}</p>
      ) : (
        <Button className="mt-4" onClick={() => setUser({ name: 'John Doe' })}>
          Log In
        </Button>
      )}
    </Container>
  );
};

export default HomePage;
