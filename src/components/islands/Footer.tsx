import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg mb-4 text-white">Pondok Pesantren Darurrohman</h3>
            <p className="text-emerald-100 text-sm leading-relaxed">
              Lembaga pendidikan Islam yang fokus pada program tahfidz Al-Qur'an dengan metode pembelajaran modern dan islami.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4 text-white">Kontak</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Phone size={16} className="mt-1 flex-shrink-0 text-emerald-300" />
                <span className="text-emerald-100">+62 812-3456-7890</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={16} className="mt-1 flex-shrink-0 text-emerald-300" />
                <span className="text-emerald-100">info@darurrohman.id</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-emerald-300" />
                <span className="text-emerald-100">
                  Jl. Pendidikan No. 123, Kota, Provinsi 12345
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4 text-white">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/profil" className="text-emerald-100 hover:text-white transition-colors">
                  Profil Pondok
                </a>
              </li>
              <li>
                <a href="/program" className="text-emerald-100 hover:text-white transition-colors">
                  Program Tahfidz
                </a>
              </li>
              <li>
                <a href="/pendaftaran" className="text-emerald-100 hover:text-white transition-colors">
                  Pendaftaran
                </a>
              </li>
              <li>
                <a href="/galeri" className="text-emerald-100 hover:text-white transition-colors">
                  Galeri
                </a>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-lg mb-4 text-white">Jam Operasional</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Clock size={16} className="mt-1 flex-shrink-0 text-emerald-300" />
                <div className="text-emerald-100">
                  <p>Senin - Jumat</p>
                  <p>08:00 - 16:00 WIB</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={16} className="mt-1 flex-shrink-0 text-emerald-300" />
                <div className="text-emerald-100">
                  <p>Sabtu</p>
                  <p>08:00 - 12:00 WIB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-800 mt-8 pt-8 text-center text-sm text-emerald-200">
          <p>© 2026 Pondok Pesantren Tahfidz Qur'an Darurrohman. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
