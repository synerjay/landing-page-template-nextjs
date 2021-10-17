import Head from 'next/head';
import Link from 'next/link';
import Services from '../comps/Cards';
import Feature from '../comps/Feature';
import Footer from '../comps/Footer';
import GlassCard from '../comps/GlassCard';
import Header from '../comps/Header';
import Hero from '../comps/Hero';
import Layout from '../comps/Layout';
import Navbar from '../comps/Navbar';
import Offset from '../comps/Offset';
import Testimonials from '../comps/Testimonials';
import styles from '../styles/Home.module.css';

export default function Home() {
  // in React a component MUST have a single FRAGMENT. it cannot have TWO elements side by side each other
  return (
    <Layout pageTitle='Product Landing Page'>
      <div className='topSection'>
        <Header />
        <Hero />
        <div className='-mt-7'>
          <div className='w-full text-center'>
            <p className='text-sm tracking-widest text-white'>Subtitle</p>
            <h1 className='font-bold text-5xl text-white'>Title</h1>
          </div>
          <div className='flex flex-row justify-center items-center'>
            <GlassCard />
          </div>
          {/* <div className='grid grid-cols-1 gap-4 sm:grid-cols-3 '>
            <div className='p-2 sm:p-10 text-center cursor-pointer'>
              <div className='py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500  bg-white'>
                <div className='space-y-10'>
                  <i className='fa fa-spa'></i>

                  <div className='px-6 py-4'>
                    <div className='space-y-5'>
                      <div className='font-bold text-xl mb-2'>Spa</div>
                      <p className='text-gray-700 text-base'>
                        Todo tipo de masajes y técnicas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='p-2 sm:p-10 text-center cursor-pointer text-white'>
              <div className='py-16 max-w-sm rounded overflow-hidden shadow-lg bg-orange-500 hover:bg-orange-600 transition duration-500'>
                <div className='space-y-10'>
                  <i className='fa fa-head-side-mask'></i>
                  <div className='px-6 py-4'>
                    <div className='space-y-5'>
                      <div className='font-bold text-xl mb-2'>Bioseguridad</div>
                      <p className='text-base'>
                        Altos estandares de bioseguridad
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='p-2 sm:p-10 text-center cursor-pointer translate-x-2'>
              <div className='py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500 bg-white '>
                <div className='space-y-10'>
                  <i className='fa fa-swimmer'></i>

                  <div className='px-6 py-4'>
                    <div className='space-y-5'>
                      <div className='font-bold text-xl mb-2'>Piscina</div>
                      <p className='text-gray-700 text-base'>
                        Piscina temperada
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* Feature pictures */}
      {/* <section className=''>
        <div className='container mx-auto flex px-10 py-4 items-center justify-center flex-col'>
          <img
            className='lg:w-15/15 md:w-15/5 w-20/6 mb-10 object-cover object-center rounded'
            alt='hero'
            src=' https://dummyimage.com/1000x600/edf2f7/0f1631'
          />
        </div>
      </section> */}
      {/* <GlassCard /> */}
      {/* Put cards here */}
      <Services />
      <Feature />
      <Offset />
      <Testimonials />
      <Footer />
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
