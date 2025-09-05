'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from '@/app/RightSidebar.module.css';

export function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        className={styles.hamburger}
        onClick={() => setOpen(prev => !prev)}
      >
       { !open ? "☰" : "X"}
      </button>


      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${open ? styles.show : ''}`}>
        <nav>
          <Link href="/contacts" onClick={() => setOpen(false)}>Contacts</Link>
          <Link href="/settings" onClick={() => setOpen(false)}>Settings</Link>
          <Link href="/privacy-policy" onClick={() => setOpen(false)}>Privacy Policy</Link>
          <Link href="/terms" onClick={() => setOpen(false)}>Terms & Conditions</Link>
        </nav>
      </aside>
    </>
  );
}
