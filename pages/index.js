import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>VASU 'Insane' GPT</title>
        <meta name="description" content="Portfolio of Vasu GPT - AI strategist & content creator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}
