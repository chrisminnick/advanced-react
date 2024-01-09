import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Link href="/about">About Us</Link>
        <Link href="/contact-us">Contact Us</Link>
        <h1>My Next.js App</h1>
      </div>
    </main>
  );
}
