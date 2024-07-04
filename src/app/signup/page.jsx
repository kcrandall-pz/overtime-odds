"use client";

import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';
import styles from './Signup.module.css';
import SuccessModal from './SuccessModal';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [selectedProfilePic, setSelectedProfilePic] = useState(null);
    const [displayModal, setDisplayModal] = useState(false);
    const [error, setError] = useState('');

    const profilePics = [
        '/profile_icons/_green.png',
        '/profile_icons/_blue.png',
        '/profile_icons/_purple.png',
        '/profile_icons/_red.png',
        '/profile_icons/_yellow.png',
    ];

    const handleSignup = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        
        try {
            const response = await axios.post('/api/register', {
                email,
                password,
                displayName: name,
                profilePic: selectedProfilePic
            });

            if (response.status === 200) {
                setDisplayModal(true);
                setName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setSelectedProfilePic(null);
            } else {
                setError('Failed to register');
            }

        } catch (err) {
            console.error('Registration error:', err);
            setError('Failed to register');
        }
    };

    const handleProfilePicClick = (picUrl) => {
        setSelectedProfilePic(picUrl);
    };

    return (
        <Container className={styles['signupContainer']}>
            <div className={styles['signupBox']}>
                <h2>Sign Up</h2>
                <h6>Complete the following to create an account</h6>
                {displayModal && <SuccessModal />}
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
                    <Form.Group controlId="formProfilePic" className={styles['formGroup']}>
                        <Form.Label className={styles['formLabel']}>Select Profile Picture</Form.Label>
                        <Row className={styles['profilePicRow']}>
                            {profilePics.map((pic, index) => (
                                <Col key={index} xs={6} md={2} className={styles['profilePicCol']}>
                                    <Image
                                        src={pic}
                                        className={`${styles['profilePic']} ${selectedProfilePic === pic ? styles['selected'] : ''}`}
                                        onClick={() => handleProfilePicClick(pic)}
                                        thumbnail
                                    />
                                </Col>
                            ))}
                        </Row>
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
