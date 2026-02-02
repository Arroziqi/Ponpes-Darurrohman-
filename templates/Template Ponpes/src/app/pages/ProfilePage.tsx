import { BookOpen, Users, Target, Heart } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function ProfilePage() {
  const values = [
    {
      icon: <BookOpen className="w-8 h-8 text-emerald-700" />,
      title: 'Qur\'ani',
      description: 'Menjadikan Al-Qur\'an sebagai pedoman hidup dalam setiap aktivitas.',
    },
    {
      icon: <Heart className="w-8 h-8 text-emerald-700" />,
      title: 'Akhlak Mulia',
      description: 'Membentuk karakter santri yang berakhlak mulia dan beradab.',
    },
    {
      icon: <Target className="w-8 h-8 text-emerald-700" />,
      title: 'Disiplin',
      description: 'Membangun kedisiplinan dalam belajar dan beribadah.',
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-700" />,
      title: 'Ukhuwah',
      description: 'Memupuk persaudaraan dan kebersamaan antar santri.',
    },
  ];

  const timeline = [
    {
      year: '2010',
      title: 'Pendirian Pondok',
      description: 'Pondok Pesantren Darurrohman didirikan dengan 20 santri pertama.',
    },
    {
      year: '2015',
      title: 'Perluasan Fasilitas',
      description: 'Pembangunan gedung baru dan peningkatan fasilitas asrama.',
    },
    {
      year: '2020',
      title: 'Program Tahfidz 30 Juz',
      description: 'Melahirkan lulusan pertama yang hafal 30 juz Al-Qur\'an.',
    },
    {
      year: '2026',
      title: 'Prestasi Nasional',
      description: 'Lebih dari 500 santri aktif dengan berbagai prestasi tahfidz.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-800 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-emerald-600/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm mb-6">
              Profil Pondok
            </span>
            <h1 className="text-4xl md:text-5xl mb-6 leading-tight">
              Tentang Pondok Pesantren Darurrohman
            </h1>
            <p className="text-xl text-emerald-50 leading-relaxed">
              Lembaga pendidikan Islam yang fokus pada pembinaan generasi Qur'ani melalui program tahfidz berkualitas dengan lingkungan yang kondusif.
            </p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600383963284-91ef78fc9b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwYXJjaGl0ZWN0dXJlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcwMDEyOTkwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Gedung Pondok Pesantren"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="inline-block text-emerald-600 font-semibold mb-4">Sejarah Kami</span>
              <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
                Perjalanan Pondok Darurrohman
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Pondok Pesantren Tahfidz Qur'an Darurrohman didirikan pada tahun 2010 dengan visi mulia untuk mencetak generasi penghafal Al-Qur'an yang berakhlak mulia dan bermanfaat bagi umat.
                </p>
                <p>
                  Berawal dari sebuah rumah sederhana dengan 20 santri pertama, kini Darurrohman telah berkembang menjadi salah satu lembaga tahfidz terpercaya dengan lebih dari 500 santri aktif dari berbagai daerah di Indonesia.
                </p>
                <p>
                  Dengan metode pembelajaran yang teruji dan didukung oleh pengajar berkualitas, kami telah menghasilkan ratusan hafidz dan hafidzah yang tersebar di berbagai daerah dan melanjutkan studi di berbagai institusi pendidikan tinggi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-emerald-600 font-semibold mb-4">Visi & Misi</span>
            <h2 className="text-3xl md:text-4xl text-gray-900">
              Komitmen Kami
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-emerald-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900">Visi</h3>
              <p className="text-gray-600 leading-relaxed">
                Menjadi lembaga pendidikan Islam unggulan yang mencetak generasi penghafal Al-Qur'an yang berakhlak mulia, berilmu, dan bermanfaat bagi umat dengan landasan nilai-nilai Islam yang kuat dan karakter yang tangguh.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-emerald-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900">Misi</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Membimbing santri menghafal Al-Qur'an dengan tartil dan tahsin yang benar</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Membina akhlak dan karakter Islami yang kuat</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Mengembangkan potensi akademik dan non-akademik santri</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Menciptakan lingkungan pembelajaran yang kondusif dan islami</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-emerald-600 font-semibold mb-4">Nilai-Nilai Kami</span>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Fondasi Pembinaan Santri
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nilai-nilai yang menjadi landasan dalam setiap aktivitas dan pembelajaran di Pondok Pesantren Darurrohman.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-emerald-600 font-semibold mb-4">Perjalanan Kami</span>
            <h2 className="text-3xl md:text-4xl text-gray-900">
              Timeline Perkembangan
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-emerald-700 text-white w-20 h-20 rounded-xl flex items-center justify-center">
                      <span className="font-semibold">{item.year}</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2">500+</div>
              <div className="text-emerald-200">Santri Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2">200+</div>
              <div className="text-emerald-200">Alumni Hafidz</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2">30+</div>
              <div className="text-emerald-200">Pengajar</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2">15+</div>
              <div className="text-emerald-200">Tahun Berdiri</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
