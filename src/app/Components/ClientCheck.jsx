// components/ClientCheck.js
"use client";

import { useEffect } from 'react';
import useStore from '../stores/useStore';
import Login from './Login';

const ClientCheck = ({ children }) => {
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

  if (!user) {
    return <Login />;
  }

  return children;
};

export default ClientCheck;
