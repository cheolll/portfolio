

import SectionNav from '@/components/sectionNav/SectionNav';
import Hero from '../../components/hero/Hero';
import About from '@/components/about/About';
import Skills from '@/components/skills/Skills';
import Projects from '@/components/projects/Projects';
import Contact from '@/components/contact/contact';
import ScrollTop from '@/components/sectionNav/ScrollTop';


const Home = () => {
  return (
    <>
      <SectionNav />
      <ScrollTop />

      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default Home;