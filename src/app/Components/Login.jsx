"use client";

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import useStore from '../stores/useStore';
import styles from '../styles/Login.module.css';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setUser } = useStore();
  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/signin', { email, password });
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);  // This will now set all necessary fields in the store
      router.push('/home');
    } catch (err) {
      setError('Invalid email or password');
    }
  };


  return (
    <div className={styles['loginContainer']}>
      <div className={styles['loginBox']}>
        <h2>Login</h2>
        <h6>Please sign in to continue</h6>
        <Form onSubmit={handleLogin}>
          <Form.Group className={styles['formGroup']}>
            <Form.Label className={styles['formLabel']}>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="E-mail address"
              className={styles['formControl']}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className={styles['formGroup']}>
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

          {error && <p className="text-danger">{error}</p>}

          <Button variant="primary" type="submit" className={styles['loginButton']}>
            Login
          </Button>
        </Form>
        <p className="signup-link">
          New to us? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
