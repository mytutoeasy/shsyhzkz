import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Portfolio from '@/components/Portfolio'
import Categories from '@/components/Categories'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Portfolio />
      <Categories />
      <Testimonials />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}
