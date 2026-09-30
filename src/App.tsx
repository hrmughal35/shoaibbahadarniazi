import { Approach } from './components/Approach';
import { Credentials } from './components/Credentials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Insights } from './components/Insights';
import { Navbar } from './components/Navbar';
import { PracticeAreas } from './components/PracticeAreas';
import { ProfileSection } from './components/ProfileSection';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <div id="top" />
        <Hero />
        <ProfileSection />
        <PracticeAreas />
        <Approach />
        <Credentials />
        <Insights />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
