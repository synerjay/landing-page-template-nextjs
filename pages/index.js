import Services from '../comps/Services';
import Feature from '../comps/Feature';
import Footer from '../comps/Footer';
import GlassCard from '../comps/GlassCard';
import Header from '../comps/Header';
import Hero from '../comps/Hero';
import Layout from '../comps/Layout';
import Testimonials from '../comps/Testimonials';
import styles from '../styles/Home.module.css';
import Pricing from '../comps/Pricing';
import Tour from '../comps/Tour';
import Action from '../comps/Action';

export default function Home() {
  // in React a component MUST have a single FRAGMENT. it cannot have TWO elements side by side each other
  return (
    <Layout pageTitle='Product Landing Page'>
      <div className='topSection h-auto w-auto md:h-screen md:w-screen'>
        <Header />
        <Hero />
        <div className='-mt-16'>
          <div className='flex flex-row justify-center items-center'>
            <GlassCard>
              <div className='p-6'>
                <img
                  src='/images/landingimage.png'
                  alt=''
                  className='img-fluid mx-auto d-block rounded-xl shadow-lg'
                />
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
      <Services />
      <Feature />
      <Tour />
      <Pricing />
      <Testimonials />
      <Action />
      <Footer />
    </Layout>
  );
}
