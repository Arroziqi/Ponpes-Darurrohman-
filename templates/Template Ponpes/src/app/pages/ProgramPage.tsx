import { BookOpen, Clock, Users, Award, CheckCircle2, Target } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function ProgramPage() {
  const programs = [
    {
      title: 'Program Tahfidz 30 Juz',
      duration: '4-5 Tahun',
      target: 'Hafal 30 Juz Al-Qur\'an',
      description: 'Program lengkap untuk menghafal seluruh Al-Qur\'an 30 juz dengan metode yang teruji dan bimbingan intensif dari ustadz berpengalaman.',
      features: [
        'Target hafalan 1 juz per 2 bulan',
        'Bimbingan setoran harian',
        'Muraja\'ah rutin terjadwal',
        'Evaluasi hafalan berkala',
        'Sertifikat Hafidz/Hafidzah',
      ],
      color: 'emerald',
    },
    {
      title: 'Program Tahfidz 15 Juz',
      duration: '2-3 Tahun',
      target: 'Hafal 15 Juz Al-Qur\'an',
      description: 'Program menengah untuk menghafal 15 juz Al-Qur\'an, cocok untuk santri dengan waktu terbatas namun berkomitmen tinggi.',
      features: [
        'Target hafalan 1 juz per 2 bulan',
        'Setoran harian dengan musyrif',
        'Muraja\'ah terjadwal',
        'Evaluasi per 3 bulan',
        'Sertifikat penghargaan',
      ],
      color: 'teal',
    },
    {
      title: 'Program Tahsin Al-Qur\'an',
      duration: '1 Tahun',
      target: 'Membaca Al-Qur\'an dengan Tartil',
      description: 'Program perbaikan bacaan Al-Qur\'an sesuai kaidah tajwid dan makhraj yang benar sebelum memulai program hafalan.',
      features: [
        'Pembelajaran tajwid dasar',
        'Praktik makhraj huruf',
        'Bimbingan tartil',
        'Evaluasi berkala',
        'Sertifikat tahsin',
      ],
      color: 'cyan',
    },
  ];

  const methods = [
    {
      icon: <BookOpen className="w-8 h-8 text-emerald-700" />,
      title: 'Metode Talqin',
      description: 'Santri menyimak bacaan ustadz kemudian menirukan dengan benar.',
    },
    {
      icon: <Target className="w-8 h-8 text-emerald-700" />,
      title: 'Metode Wahdah',
      description: 'Menghafal satu per satu ayat hingga lancar sebelum lanjut ayat berikutnya.',
    },
    {
      icon: <Clock className="w-8 h-8 text-emerald-700" />,
      title: 'Muraja\'ah Rutin',
      description: 'Pengulangan hafalan secara terjadwal untuk menjaga kualitas hafalan.',
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-700" />,
      title: 'Tasmi\' Jama\'i',
      description: 'Mendengarkan hafalan bersama untuk saling mengoreksi dan menguatkan.',
    },
  ];

  const schedule = [
    { time: '04:00 - 05:00', activity: 'Tahajud & Tilawah' },
    { time: '05:00 - 06:00', activity: 'Subuh & Muraja\'ah Pagi' },
    { time: '06:00 - 07:30', activity: 'Setoran Hafalan Baru' },
    { time: '07:30 - 08:00', activity: 'Sarapan' },
    { time: '08:00 - 12:00', activity: 'Pembelajaran Formal' },
    { time: '12:00 - 15:00', activity: 'Dzuhur, Ishoma & Ashar' },
    { time: '15:00 - 17:00', activity: 'Setoran Hafalan & Tahsin' },
    { time: '17:00 - 18:30', activity: 'Maghrib & Kajian' },
    { time: '18:30 - 20:00', activity: 'Isya & Muraja\'ah Malam' },
    { time: '20:00 - 21:30', activity: 'Belajar Mandiri' },
    { time: '21:30 - 04:00', activity: 'Istirahat' },
  ];

  const facilities = [
    'Asrama nyaman dan bersih',
    'Ruang belajar ber-AC',
    'Perpustakaan lengkap',
    'Masjid representatif',
    'Kantin sehat',
    'Lapangan olahraga',
    'Klinik kesehatan',
    'Free WiFi area',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-800 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-emerald-600/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm mb-6">
              Program Kami
            </span>
            <h1 className="text-4xl md:text-5xl mb-6 leading-tight">
              Program Tahfidz Qur'an
            </h1>
            <p className="text-xl text-emerald-50 leading-relaxed">
              Pilih program tahfidz yang sesuai dengan target dan kemampuan Anda. Kami menyediakan berbagai program dengan metode pembelajaran yang teruji dan efektif.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-emerald-600 font-semibold mb-4">Pilihan Program</span>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Program Tahfidz Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Setiap program dirancang dengan sistematis untuk membantu Anda mencapai target hafalan dengan baik.
            </p>
          </div>

          <div className="space-y-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-100 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                        {program.duration}
                      </div>
                      <div className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg text-sm font-semibold">
                        {program.target}
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl mb-4 text-gray-900">{program.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Keunggulan Program:</h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="bg-emerald-700 text-white rounded-2xl p-8 text-center w-full max-w-xs">
                      <Award className="w-16 h-16 mx-auto mb-4" />
                      <div className="text-4xl mb-2">{program.target.split(' ')[0]}</div>
                      <div className="text-emerald-100">Target Hafalan</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-emerald-600 font-semibold mb-4">Metode Pembelajaran</span>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Metode Tahfidz yang Efektif
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami menggunakan metode pembelajaran yang telah terbukti efektif dalam membantu santri menghafal Al-Qur'an.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methods.map((method, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl mb-3 text-gray-900">{method.title}</h3>
                <p className="text-gray-600 leading-relaxed">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block text-emerald-600 font-semibold mb-4">Jadwal Harian</span>
              <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
                Rutinitas Santri
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Jadwal harian yang terstruktur untuk memaksimalkan waktu belajar dan hafalan Al-Qur'an dengan tetap menjaga kesehatan dan istirahat yang cukup.
              </p>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1625111380820-9a371d413cc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzY5OTQ0MzE4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Santri belajar bersama"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-2xl p-6">
              <h3 className="text-xl mb-6 text-gray-900">Jadwal Kegiatan Harian</h3>
              <div className="space-y-3">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 pb-3 border-b border-emerald-100 last:border-0"
                  >
                    <div className="bg-emerald-700 text-white px-3 py-1 rounded text-sm font-semibold flex-shrink-0 mt-0.5">
                      {item.time}
                    </div>
                    <div className="text-gray-700 flex-1">{item.activity}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-700 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-600/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm mb-6">
              Fasilitas
            </span>
            <h2 className="text-3xl md:text-4xl mb-4">
              Fasilitas Lengkap & Nyaman
            </h2>
            <p className="text-emerald-50 max-w-2xl mx-auto">
              Kami menyediakan fasilitas yang mendukung kenyamanan belajar dan kehidupan santri di pondok.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-colors"
              >
                <CheckCircle2 className="w-8 h-8 mx-auto mb-3" />
                <div className="text-white">{facility}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
