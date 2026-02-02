import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { HomePage } from '@/app/pages/HomePage';
import { ProfilePage } from '@/app/pages/ProfilePage';
import { ProgramPage } from '@/app/pages/ProgramPage';
import { RegistrationPage } from '@/app/pages/RegistrationPage';
import { GalleryPage } from '@/app/pages/GalleryPage';
import { ContactPage } from '@/app/pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profil" element={<ProfilePage />} />
            <Route path="/program" element={<ProgramPage />} />
            <Route path="/pendaftaran" element={<RegistrationPage />} />
            <Route path="/galeri" element={<GalleryPage />} />
            <Route path="/kontak" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
