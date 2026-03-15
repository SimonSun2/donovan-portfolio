import { ProjectsHero, ProjectGrid } from '../components/Projects';
import Layout from '../components/Layout/Layout';
import FadeIn from '../components/Animations/FadeIn';

export default function Projects() {
  return (
    <Layout>
      <FadeIn direction="up" duration={800}>
        <ProjectsHero />
      </FadeIn>
      <FadeIn direction="up" duration={800} delay={300}>
        <ProjectGrid />
      </FadeIn>
    </Layout>
  );
}
