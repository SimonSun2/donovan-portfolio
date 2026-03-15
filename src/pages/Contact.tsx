import { ContactHero, ContactForm, ContactInfo, SocialLinks } from '../components/Contact';
import Layout from '../components/Layout/Layout';
import FadeIn from '../components/Animations/FadeIn';

export default function Contact() {
  return (
    <Layout>
      <FadeIn direction="up" duration={800}>
        <ContactHero />
      </FadeIn>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Form */}
            <FadeIn direction="right" duration={800} delay={200}>
              <ContactForm />
            </FadeIn>
            {/* Right Column - Contact Info & Social Links */}
            <div className="space-y-8">
              <FadeIn direction="left" duration={800} delay={400}>
                <ContactInfo />
              </FadeIn>
              <FadeIn direction="left" duration={800} delay={600}>
                <SocialLinks />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
