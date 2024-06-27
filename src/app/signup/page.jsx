"use client"

import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import styles from './Signup.module.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            await axios.post('/api/signup', { name, email, password });
            window.location.href = '/';
        } catch (err) {
            setError('Failed to sign up');
        }
    };

    return (
        <Container className={styles['signupContainer']}>
            <div className={styles['signupBox']}>
                <h2>Sign Up</h2>
                <h6>Complete the following to create an account</h6>
                <Form onSubmit={handleSignup}>
                    <Form.Group controlId="formName" className={styles['formGroup']}>
                        <Form.Label className={styles['formLabel']}>Display Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Display name"
                            className={styles['formControl']}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formEmail" className={styles['formGroup']}>
                        <Form.Label className={styles['formLabel']}>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="E-mail address"
                            className={styles['formControl']}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formPassword" className={styles['formGroup']}>
                        <Form.Label className={styles['formLabel']}>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            className={styles['formControl']}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formConfirmPassword" className={styles['formGroup']}>
                        <Form.Label className={styles['formLabel']}>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            className={styles['formControl']}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </Form.Group>
                    {error && <p className="text-danger">{error}</p>}
                    <Button variant="primary" type="submit" className={styles['signupButton']}>
                        Sign Up
                    </Button>
                </Form>
                <p className="login-link">
                    Already have an account? <a href="/">Login</a>
                </p>
            </div>
        </Container>
    );
};

export default Signup;
