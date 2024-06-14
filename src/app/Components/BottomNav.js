// src/components/BottomNav.js
"use client";

import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPeopleGroup, faMoneyBillTransfer, faNewspaper, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/BottomNav.module.css';

const BottomNav = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom" className={styles.navbar}>
      <Nav className="m-auto">
        <Nav.Link href="/">
          <FontAwesomeIcon icon={faHome} size="lg" className={styles.icon} />
        </Nav.Link>
        <Nav.Link href="/leagues">
          <FontAwesomeIcon icon={faPeopleGroup} size="lg" className={styles.icon} />
        </Nav.Link>
        <Nav.Link href="/bets">
          <FontAwesomeIcon icon={faMoneyBillTransfer} size="lg" className={styles.icon} />
        </Nav.Link>
        <Nav.Link href="/news">
          <FontAwesomeIcon icon={faNewspaper} size="lg" className={styles.icon} />
        </Nav.Link>
        <Nav.Link href="/profile">
          <FontAwesomeIcon icon={faUser} size="lg" className={styles.icon} />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default BottomNav;
