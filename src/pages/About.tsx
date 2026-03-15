import AboutHero from '../components/AboutHero';
import AcademicTimeline from '../components/AcademicTimeline';
import TestScores from '../components/TestScores';
import LeadershipSection from '../components/LeadershipSection';
import FutureGoals from '../components/FutureGoals';

export default function About() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AcademicTimeline />
      <TestScores />
      <LeadershipSection />
      <FutureGoals />
    </div>
  );
}
