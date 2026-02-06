import { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function GalleryScreen() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Semua Kegiatan' },
    { id: 'tahfidz', label: 'Kegiatan Tahfidz' },
    { id: 'akademik', label: 'Pembelajaran' },
    { id: 'ekstrakurikuler', label: 'Ekstrakurikuler' },
    { id: 'fasilitas', label: 'Fasilitas' },
  ];

  const galleryItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1631148902202-a7aa5d651445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdXJhbiUyMHJlYWRpbmclMjBzdHVkZW50c3xlbnwxfHx8fDE3NzAwMDE2ODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Setoran Hafalan',
      category: 'tahfidz',
      description: 'Santri menyetorkan hafalan kepada ustadz',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1625111380820-9a371d413cc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzY5OTQ0MzE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Belajar Bersama',
      category: 'akademik',
      description: 'Santri belajar bersama di kelas',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1762059908278-db1a69af2309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3NxdWUlMjBpbnRlcmlvciUyMHBlYWNlZnVsfGVufDF8fHx8MTc2OTk5MjI5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Masjid Pondok',
      category: 'fasilitas',
      description: 'Masjid sebagai pusat kegiatan ibadah',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1600383963284-91ef78fc9b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwYXJjaGl0ZWN0dXJlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcwMDEyOTkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Gedung Pondok',
      category: 'fasilitas',
      description: 'Bangunan utama pondok pesantren',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1631148902202-a7aa5d651445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdXJhbiUyMHJlYWRpbmclMjBzdHVkZW50c3xlbnwxfHx8fDE3NzAwMDE2ODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Muraja\'ah Pagi',
      category: 'tahfidz',
      description: 'Kegiatan muraja\'ah hafalan di pagi hari',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1625111380820-9a371d413cc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzY5OTQ0MzE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Kegiatan Olahraga',
      category: 'ekstrakurikuler',
      description: 'Santri mengikuti kegiatan olahraga',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1631148902202-a7aa5d651445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdXJhbiUyMHJlYWRpbmclMjBzdHVkZW50c3xlbnwxfHx8fDE3NzAwMDE2ODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Kajian Kitab',
      category: 'akademik',
      description: 'Pembelajaran kajian kitab kuning',
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1762059908278-db1a69af2309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3NxdWUlMjBpbnRlcmlvciUyMHBlYWNlZnVsfGVufDF8fHx8MTc2OTk5MjI5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Sholat Berjamaah',
      category: 'tahfidz',
      description: 'Kegiatan sholat berjamaah di masjid',
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1625111380820-9a371d413cc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzY5OTQ0MzE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Kegiatan Seni',
      category: 'ekstrakurikuler',
      description: 'Ekstrakurikuler seni dan kreativitas',
    },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-emerald-800 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-emerald-600/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm mb-6">
              Galeri
            </span>
            <h1 className="text-4xl md:text-5xl mb-6 leading-tight">
              Galeri Kegiatan
            </h1>
            <p className="text-xl text-emerald-50 leading-relaxed">
              Lihat berbagai kegiatan dan fasilitas yang ada di Pondok Pesantren Darurrohman melalui dokumentasi foto-foto kami.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="py-8 bg-white sticky top-16 md:top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? 'bg-emerald-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg">Tidak ada gambar untuk kategori ini.</div>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Kegiatan & Prestasi
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berbagai kegiatan dan pencapaian santri Pondok Pesantren Darurrohman.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-linear-to-br from-emerald-50 to-white border border-emerald-100 rounded-xl p-6 text-center">
              <div className="text-4xl md:text-5xl text-emerald-700 mb-2">100+</div>
              <div className="text-gray-600">Kegiatan per Tahun</div>
            </div>
            <div className="bg-linear-to-br from-emerald-50 to-white border border-emerald-100 rounded-xl p-6 text-center">
              <div className="text-4xl md:text-5xl text-emerald-700 mb-2">50+</div>
              <div className="text-gray-600">Prestasi Santri</div>
            </div>
            <div className="bg-linear-to-br from-emerald-50 to-white border border-emerald-100 rounded-xl p-6 text-center">
              <div className="text-4xl md:text-5xl text-emerald-700 mb-2">20+</div>
              <div className="text-gray-600">Ekstrakurikuler</div>
            </div>
            <div className="bg-linear-to-br from-emerald-50 to-white border border-emerald-100 rounded-xl p-6 text-center">
              <div className="text-4xl md:text-5xl text-emerald-700 mb-2">15+</div>
              <div className="text-gray-600">Fasilitas Lengkap</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-linear-to-br from-emerald-700 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Ingin Melihat Langsung?
          </h2>
          <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
            Kunjungi pondok kami untuk melihat langsung fasilitas dan suasana pembelajaran. Kami siap melayani kunjungan Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/628123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-emerald-700 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors"
            >
              Jadwalkan Kunjungan
            </a>
            <a
              href="/kontak"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
