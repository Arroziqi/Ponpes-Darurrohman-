import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Beranda' },
  { path: '/profil', label: 'Profil' },
  { path: '/program', label: 'Program Tahfidz' },
  { path: '/pendaftaran', label: 'Pendaftaran' },
  { path: '/galeri', label: 'Galeri' },
  { path: '/kontak', label: 'Kontak' },
]

export default function NavigationIsland() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const pathname =
    typeof window !== 'undefined' ? window.location.pathname : '/'

  const isActive = (path: string) => pathname === path

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-700 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl md:text-2xl">د</span>
            </div>
            <div className="flex flex-col">
              <span className="text-emerald-800 font-semibold text-sm md:text-base leading-tight">
                Pondok Pesantren
              </span>
              <span className="text-emerald-600 text-xs md:text-sm leading-tight">
                Darurrohman
              </span>
            </div>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex space-x-1 lg:space-x-2">
            {navLinks.map(link => (
              <a
                key={link.path}
                href={link.path}
                className={`px-3 lg:px-4 py-2 rounded-md text-sm transition-colors ${
                  isActive(link.path)
                    ? 'bg-emerald-700 text-white'
                    : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navLinks.map(link => (
              <a
                key={link.path}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-md text-sm transition-colors ${
                  isActive(link.path)
                    ? 'bg-emerald-700 text-white'
                    : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
