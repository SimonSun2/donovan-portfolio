import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
import FeaturedProjects from '../components/FeaturedProjects';
import SkillsSnapshot from '../components/SkillsSnapshot';
import ContactCTA from '../components/ContactCTA';

function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      <SkillsSnapshot />
      <ContactCTA />
    </>
  );
}

export default Home;
