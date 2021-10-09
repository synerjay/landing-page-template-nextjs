import Head from 'next/head';
import Link from 'next/link';
import Services from '../comps/Cards';
import Feature from '../comps/Feature';
import Footer from '../comps/Footer';
import Header from '../comps/Header';
import Hero from '../comps/Hero';
import Layout from '../comps/Layout';
import Navbar from '../comps/Navbar';
import Testimonials from '../comps/Testimonials';
import styles from '../styles/Home.module.css';

export default function Home() {
  // in React a component MUST have a single FRAGMENT. it cannot have TWO elements side by side each other
  return (
    <Layout pageTitle='Product Landing Page'>
      <Header />
      <Hero />
      {/* Feature pictures */}
      <section class=''>
        <div class='container mx-auto flex px-10 py-4 items-center justify-center flex-col'>
          <img
            class='lg:w-15/15 md:w-15/5 w-20/6 mb-10 object-cover object-center rounded'
            alt='hero'
            src=' https://dummyimage.com/1000x600/edf2f7/0f1631'
          />
        </div>
      </section>
      {/* Put cards here */}
      <Services />
      <Feature />
      <Testimonials />
    </Layout>
  );
}

{
  /* <>
<Head>
  <title>Ninja List | Home</title>
  <meta name='keywords' content='ninjas' />
</Head>
<div>
  <h1 className={styles.title}>Homepage</h1>
  <p className={styles.text}>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quia
    perferendis qui quos rerum inventore earum. Harum velit dignissimos,
    excepturi asperiores similique ipsam ipsa recusandae repudiandae sequi
    doloribus, a inventore!
  </p>
  <p className={styles.text}>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
    nihil blanditiis iste obcaecati qui recusandae repudiandae alias
    quibusdam sapiente deleniti facilis nemo tenetur repellat doloribus
    natus, odio, sequi quae pariatur.
  </p>
  <Link href='ninjas'>
    <a className={styles.btn}>See ninja listing</a>
  </Link>
</div>
</> */
}
