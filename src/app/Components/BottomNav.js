"use client";
import Link from 'next/link';
import { Navbar, Nav } from 'react-bootstrap';
import styles from '../styles/BottomNav.module.css';

function BottomNav() {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom" className={styles.navbar}>
      <Nav className="m-auto">
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

export default BottomNav;