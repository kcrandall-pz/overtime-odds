// src/components/TopNav.js
"use client";

import Link from 'next/link';
import { Navbar, Nav } from 'react-bootstrap';
import styles from '../styles/TopNav.module.css'; // Example assuming styles are under src/styles

export default function TopNav() {
  return (
    <Navbar bg="dark" variant="dark" className={styles.navbar}>
      <Navbar.Brand href="/">Overtime Odds</Navbar.Brand>
      <Nav className="mr-auto">
        <Link href="/" passHref>
          <Nav.Link>Home</Nav.Link>
        </Link>
        <Link href="/leagues" passHref>
          <Nav.Link>Leagues</Nav.Link>
        </Link>
        <Link href="/bets" passHref>
          <Nav.Link>Bets</Nav.Link>
        </Link>
        <Link href="/profile" passHref>
          <Nav.Link>Profile</Nav.Link>
        </Link>
      </Nav>
    </Navbar>
  );
}
