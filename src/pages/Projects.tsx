import { ProjectsHero, ProjectGrid } from '../components/Projects';
import Layout from '../components/Layout/Layout';

export default function Projects() {
  return (
    <Layout>
      <ProjectsHero />
      <ProjectGrid />
    </Layout>
  );
}
