// src/components/Layout.js
"use client";

import TopNav from './TopNav';
import BottomNav from './BottomNav';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <TopNav />
      <main className={styles.mainContent}>{children}</main>
      <BottomNav />
    </div>
  );
}
