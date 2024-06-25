// src/components/TopNav.js
"use client";

import { Container, Navbar, Nav } from 'react-bootstrap';
import styles from '../styles/TopNav.module.css';

const TopNav = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className={styles.navbar}>
      <Navbar.Brand className={styles['navbar-brand']} href="/">
        <img
          src="/OO_white.png"
          height="30"
          className="d-inline-block align-top"
          alt="Overtime Odds logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.toggle} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link href="/" className={styles['nav-link']}>Home</Nav.Link>
          <Nav.Link href="/leagues" className={styles['nav-link']}>Leagues</Nav.Link>
          <Nav.Link href="/bets" className={styles['nav-link']}>Bets</Nav.Link>
          <Nav.Link href="/newsResearch" className={styles['nav-link']}>News & Research</Nav.Link>
          <Nav.Link href="/profile" className={styles['nav-link']}>Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNav;
