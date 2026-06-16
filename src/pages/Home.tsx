import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Benefits from '../components/Benefits'
import ServiceArea from '../components/ServiceArea'
import CTA from '../components/CTA'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <ServiceArea />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
