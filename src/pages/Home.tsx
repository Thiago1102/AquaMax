import { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Benefits from '../components/Benefits'
import ServiceArea from '../components/ServiceArea'
import CTA from '../components/CTA'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('.reveal-on-scroll')
    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { root: null, threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="reveal-on-scroll reveal-up" style={{ ['--reveal-delay' as any]: '40ms' }}>
          <Services />
        </div>
        <div className="reveal-on-scroll reveal-zoom" style={{ ['--reveal-delay' as any]: '80ms' }}>
          <Benefits />
        </div>
        <div className="reveal-on-scroll reveal-left" style={{ ['--reveal-delay' as any]: '120ms' }}>
          <ServiceArea />
        </div>
        <div className="reveal-on-scroll reveal-up" style={{ ['--reveal-delay' as any]: '160ms' }}>
          <CTA />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
