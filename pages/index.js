import Head from 'next/head';
import Footer from '../comps/Footer';
import Navbar from '../comps/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quia
        perferendis qui quos rerum inventore earum. Harum velit dignissimos,
        excepturi asperiores similique ipsam ipsa recusandae repudiandae sequi
        doloribus, a inventore!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci nihil
        blanditiis iste obcaecati qui recusandae repudiandae alias quibusdam
        sapiente deleniti facilis nemo tenetur repellat doloribus natus, odio,
        sequi quae pariatur.
      </p>
      <Footer />
    </div>
  );
}
