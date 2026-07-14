import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import BusinessValue from './components/BusinessValue';
import Approach from './components/Approach';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ContactFooter from './components/ContactFooter';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-paper)]">
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Services />
        <BusinessValue />
        <Approach />
        <Projects />
        <Skills />
        <Experience />
      </main>
      <ContactFooter />
    </div>
  );
}
