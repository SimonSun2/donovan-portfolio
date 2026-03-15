import { SkillsHero, TechnicalSkills, LeadershipSkills, AwardsSection } from '../components/Skills';
import Layout from '../components/Layout/Layout';

export default function Skills() {
  return (
    <Layout>
      <SkillsHero />
      <TechnicalSkills />
      <LeadershipSkills />
      <AwardsSection />
    </Layout>
  );
}
