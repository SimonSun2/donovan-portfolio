import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
import FeaturedProjects from '../components/FeaturedProjects';
import SkillsSnapshot from '../components/SkillsSnapshot';
import ContactCTA from '../components/ContactCTA';
import FadeIn from '../components/Animations/FadeIn';

function Home() {
  return (
    <>
      {/* Hero Section - Fade in from bottom */}
      <FadeIn direction="up" duration={800}>
        <Hero />
      </FadeIn>

      {/* About Preview - Fade in with delay */}
      <FadeIn direction="up" duration={800} delay={200}>
        <AboutPreview />
      </FadeIn>

      {/* Featured Projects - Fade in with more delay */}
      <FadeIn direction="up" duration={800} delay={400}>
        <FeaturedProjects />
      </FadeIn>

      {/* Skills Snapshot - Fade in */}
      <FadeIn direction="up" duration={800} delay={600}>
        <SkillsSnapshot />
      </FadeIn>

      {/* Contact CTA - Fade in */}
      <FadeIn direction="up" duration={800} delay={800}>
        <ContactCTA />
      </FadeIn>
    </>
  );
}

export default Home;
