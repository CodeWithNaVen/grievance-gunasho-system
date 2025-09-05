'use client';
import { ReactNode } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import styles from '../app/AppLayout.module.css';
import { MobileSidebar } from './MobileSidebar';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1>Gunaso</h1>
        <div className={styles.controls}>
          <ThemeToggle />
          <LanguageToggle />
          <MobileSidebar />
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>© 2025 Gunaso System</p>
      </footer>
    </div>
  );
}
