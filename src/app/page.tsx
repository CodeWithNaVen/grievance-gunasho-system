// src/app/page.tsx
import { ThemeToggle } from '@/components/ThemeToggle';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Gunaso</h1>
        <div className={styles.themeToggle}>
          <ThemeToggle />
        </div>
      </header>

      <main className={styles.main}>
        <p>Welcome to the Gunaso system frontend by Nabin! ✅</p>
      </main>
    </div>
  );
}
