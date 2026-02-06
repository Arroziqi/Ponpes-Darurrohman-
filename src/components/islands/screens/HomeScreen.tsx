import { BookOpen, Users, Award, Heart, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import IslamicGroupImg from "../../../assets/img/islamic-group-of-man.avif";

export default function HomeScreen() {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-emerald-700" />,
      title: 'Program Tahfidz Intensif',
      description: 'Metode hafalan terstruktur dengan target yang jelas dan bimbingan intensif dari ustadz berpengalaman.',
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-700" />,
      title: 'Pengajar Berkualitas',
      description: 'Tim pengajar yang kompeten dengan sanad tahfidz yang jelas dan metode pengajaran yang disesuaikan.',
    },
    {
      icon: <Award className="w-8 h-8 text-emerald-700" />,
      title: 'Fasilitas Lengkap',
      description: 'Asrama nyaman, ruang belajar kondusif, perpustakaan, dan fasilitas pendukung pembelajaran lainnya.',
    },
    {
      icon: <Heart className="w-8 h-8 text-emerald-700" />,
      title: 'Lingkungan Islami',
      description: 'Suasana pesantren yang mendukung pembentukan akhlak mulia dan pembiasaan beribadah yang istiqomah.',
    },
  ];

  const programs = [
    {
      title: 'Program 30 Juz',
      duration: '4-5 Tahun',
      description: 'Program lengkap menghafal 30 juz Al-Qur\'an dengan metode yang teruji dan bimbingan intensif.',
    },
    {
      title: 'Program 15 Juz',
      duration: '2-3 Tahun',
      description: 'Program menghafal 15 juz Al-Qur\'an untuk santri dengan waktu terbatas namun komitmen tinggi.',
    },
    {
      title: 'Program Tahsin',
      duration: '1 Tahun',
      description: 'Perbaikan bacaan Al-Qur\'an sesuai tajwid dan makhraj yang benar sebelum memulai hafalan.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1762380371959-96d7d36c09bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwcGF0dGVybiUyMGdyZWVufGVufDF8fHx8MTc3MDAxMjk4OXww&ixlib=rb-4.1.0&q=80&w=1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-block bg-emerald-600/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                ✨ Lembaga Tahfidz Terpercaya
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Pondok Pesantren Tahfidz Qur'an Darurrohman
            </h1>
            <p className="text-xl md:text-2xl text-emerald-50 mb-8 leading-relaxed">
              Membentuk generasi Qur'ani yang hafal Al-Qur'an dengan akhlak mulia dan berilmu amaliah.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/pendaftaran"
                className="inline-flex items-center justify-center bg-white text-emerald-700 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors group"
              >
                Daftar Santri Baru
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="/program"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
              >
                Lihat Program
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="inline-block text-emerald-600 font-semibold">Tentang Kami</span>
              </div>
              <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
                Visi & Misi Pondok Pesantren
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl text-emerald-700 mb-3">Visi</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Menjadi lembaga pendidikan Islam unggulan yang mencetak generasi penghafal Al-Qur'an yang berakhlak mulia, berilmu, dan bermanfaat bagi umat.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl text-emerald-700 mb-3">Misi</h3>
                  <ul className="space-y-2">
                    {[
                      'Membimbing santri dalam menghafal Al-Qur\'an dengan tartil',
                      'Membina akhlak dan karakter Islami yang kuat',
                      'Mengembangkan potensi akademik dan non-akademik santri',
                      'Menciptakan lingkungan pembelajaran yang kondusif',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative h-96 md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={IslamicGroupImg.src}
                alt="Santri belajar Al-Qur'an"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-emerald-600 font-semibold mb-4">Keunggulan Kami</span>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Mengapa Memilih Darurrohman?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen memberikan pendidikan tahfidz terbaik dengan pendekatan holistik yang menyeluruh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-emerald-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-emerald-600 font-semibold mb-4">Program Kami</span>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Program Tahfidz Unggulan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilih program tahfidz yang sesuai dengan target dan kemampuan Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="text-emerald-600 font-semibold mb-2">{program.duration}</div>
                <h3 className="text-2xl mb-4 text-gray-900">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{program.description}</p>
                <a
                  href="/program"
                  className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-semibold group"
                >
                  Selengkapnya
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-700 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Bergabunglah dengan Kami
          </h2>
          <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
            Wujudkan impian menjadi penghafal Al-Qur'an. Daftarkan diri Anda atau putra-putri Anda sekarang juga.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pendaftaran"
              className="inline-flex items-center justify-center bg-white text-emerald-700 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors group"
            >
              Daftar Sekarang
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
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

            {/* Hadith Virtue Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-emerald-700 font-semibold mb-4">
            Keutamaan Penghafal Al-Qur’an
          </span>

          <h2 className="text-3xl md:text-4xl text-gray-900 mb-10">
            Hadits Nabi Muhammad ﷺ tentang Ahlul Qur’an
          </h2>

          <div className="bg-emerald-50 rounded-2xl shadow-md p-8 md:p-12">
            {/* Arabic */}
            <p className="text-2xl md:text-3xl leading-loose text-gray-900 mb-8 amiri-quran-regular text-center">
              إِنَّ اللَّهَ يَرْفَعُ بِهَذَا الْكِتَابِ أَقْوَامًا، وَيَضَعُ بِهِ آخَرِينَ
            </p>

            {/* Translation */}
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
              “Sesungguhnya Allah mengangkat derajat suatu kaum dengan Al-Qur’an
              ini, dan merendahkan kaum yang lain dengannya.”
            </p>

            {/* Source */}
            <p className="text-sm text-gray-500 italic">
              (HR. Muslim)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
