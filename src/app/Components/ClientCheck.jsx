"use client";

import { useEffect } from 'react';
import useStore from '../stores/useStore';
import Login from './Login';

const ClientCheck = () => {
    const { user, setUser } = useStore();
  
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
          setUser(userData);
        }
      }
    }, [setUser]);
  
    return (
      <>
        {user ? (
          <p className="mt-2">Logged in as {user.display_name}</p>
        ) : (
          <Login />
        )}
      </>
    );
  };

export default ClientCheck;
