import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import useStore from '../stores/useStore';
import styles from '../styles/Login.module.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { setUser } = useStore();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/signin', { email, password });
            const { token, user } = response.data;
            localStorage.setItem('token', token);
            setUser(user);
            window.location.href = '/home'; // Redirect to home or profile page
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    return (
        <Container className={styles['loginContainer']}>
            <div className={styles['loginBox']}>
                <h2>Log-in to your account</h2>
                <Form onSubmit={handleLogin}>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="E-mail address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    {error && <p className="text-danger">{error}</p>}

                    <Button variant="primary" type="submit" className="login-button">
                        Login
                    </Button>
                </Form>
                <p className="signup-link">
                    New to us? <a href="/signup">Sign Up</a>
                </p>
            </div>
        </Container>
    );
};

export default Login;