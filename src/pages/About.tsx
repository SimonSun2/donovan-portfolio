import AboutHero from '../components/AboutHero';
import AcademicTimeline from '../components/AcademicTimeline';
import TestScores from '../components/TestScores';
import LeadershipSection from '../components/LeadershipSection';
import FutureGoals from '../components/FutureGoals';
import FadeIn from '../components/Animations/FadeIn';

export default function About() {
  return (
    <div className="min-h-screen">
      <FadeIn direction="up" duration={800}>
        <AboutHero />
      </FadeIn>
      <FadeIn direction="up" duration={800} delay={200}>
        <AcademicTimeline />
      </FadeIn>
      <FadeIn direction="up" duration={800} delay={400}>
        <TestScores />
      </FadeIn>
      <FadeIn direction="up" duration={800} delay={600}>
        <LeadershipSection />
      </FadeIn>
      <FadeIn direction="up" duration={800} delay={800}>
        <FutureGoals />
      </FadeIn>
    </div>
  );
}
