import { SkillsHero, TechnicalSkills, LeadershipSkills, AwardsSection } from '../components/Skills';
import Layout from '../components/Layout/Layout';
import FadeIn from '../components/Animations/FadeIn';

export default function Skills() {
  return (
    <Layout>
      <FadeIn direction="up" duration={800}>
        <SkillsHero />
      </FadeIn>
      <FadeIn direction="up" duration={800} delay={200}>
        <TechnicalSkills />
      </FadeIn>
      <FadeIn direction="up" duration={800} delay={400}>
        <LeadershipSkills />
      </FadeIn>
      <FadeIn direction="up" duration={800} delay={600}>
        <AwardsSection />
      </FadeIn>
    </Layout>
  );
}
