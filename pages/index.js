import Head from 'next/head';
import Link from 'next/link';
import Footer from '../comps/Footer';
import Navbar from '../comps/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quia
        perferendis qui quos rerum inventore earum. Harum velit dignissimos,
        excepturi asperiores similique ipsam ipsa recusandae repudiandae sequi
        doloribus, a inventore!
      </p>
      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci nihil
        blanditiis iste obcaecati qui recusandae repudiandae alias quibusdam
        sapiente deleniti facilis nemo tenetur repellat doloribus natus, odio,
        sequi quae pariatur.
      </p>
      <Link href='ninjas'>
        <a className={styles.btn}>See ninja listing</a>
      </Link>
    </div>
  );
}
