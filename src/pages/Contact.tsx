import { ContactHero, ContactForm, ContactInfo, SocialLinks } from '../components/Contact';
import Layout from '../components/Layout/Layout';

export default function Contact() {
  return (
    <Layout>
      <ContactHero />
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Form */}
            <div>
              <ContactForm />
            </div>
            {/* Right Column - Contact Info & Social Links */}
            <div className="space-y-8">
              <ContactInfo />
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
