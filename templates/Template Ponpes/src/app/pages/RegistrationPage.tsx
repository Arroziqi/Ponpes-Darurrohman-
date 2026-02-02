import { FileText, CheckCircle2, Users, Calendar, DollarSign, ArrowRight } from 'lucide-react';

export function RegistrationPage() {
  const requirements = [
    'Usia minimal 12 tahun untuk program tahfidz',
    'Mampu membaca Al-Qur\'an dengan baik (untuk program tahfidz)',
    'Sehat jasmani dan rohani',
    'Mendapat izin dari orang tua/wali',
    'Bersedia mengikuti seluruh peraturan pondok',
    'Fotokopi KTP orang tua/wali',
    'Fotokopi Kartu Keluarga',
    'Fotokopi Akte Kelahiran',
    'Pas foto 3x4 (4 lembar)',
    'Surat keterangan sehat dari dokter',
  ];

  const steps = [
    {
      number: '1',
      title: 'Pendaftaran Online',
      description: 'Isi formulir pendaftaran online atau datang langsung ke kantor pondok untuk mendaftar.',
      icon: <FileText className="w-8 h-8 text-emerald-700" />,
    },
    {
      number: '2',
      title: 'Verifikasi Berkas',
      description: 'Tim kami akan memverifikasi kelengkapan berkas yang telah Anda submit.',
      icon: <CheckCircle2 className="w-8 h-8 text-emerald-700" />,
    },
    {
      number: '3',
      title: 'Tes & Wawancara',
      description: 'Calon santri akan mengikuti tes membaca Al-Qur\'an dan wawancara bersama orang tua.',
      icon: <Users className="w-8 h-8 text-emerald-700" />,
    },
    {
      number: '4',
      title: 'Pengumuman',
      description: 'Pengumuman hasil seleksi akan disampaikan maksimal 7 hari setelah tes.',
      icon: <Calendar className="w-8 h-8 text-emerald-700" />,
    },
  ];

  const fees = [
    {
      category: 'Biaya Pendaftaran',
      amount: 'Rp 500.000',
      description: 'Dibayar satu kali saat pendaftaran',
    },
    {
      category: 'Biaya Pembangunan',
      amount: 'Rp 3.000.000',
      description: 'Dibayar satu kali saat diterima',
    },
    {
      category: 'SPP Bulanan',
      amount: 'Rp 1.500.000',
      description: 'Termasuk asrama, makan 3x sehari, dan pembelajaran',
    },
    {
      category: 'Biaya Seragam',
      amount: 'Rp 1.000.000',
      description: 'Paket lengkap seragam santri',
    },
  ];

  const batchSchedule = [
    {
      batch: 'Gelombang 1',
      period: '1 - 31 Januari 2026',
      test: '15 Februari 2026',
      announcement: '22 Februari 2026',
    },
    {
      batch: 'Gelombang 2',
      period: '1 - 31 Maret 2026',
      test: '15 April 2026',
      announcement: '22 April 2026',
    },
    {
      batch: 'Gelombang 3',
      period: '1 - 31 Mei 2026',
      test: '15 Juni 2026',
      announcement: '22 Juni 2026',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-800 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-emerald-600/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm mb-6">
              Pendaftaran Santri Baru
            </span>
            <h1 className="text-4xl md:text-5xl mb-6 leading-tight">
              Daftar Santri Baru
            </h1>
            <p className="text-xl text-emerald-50 leading-relaxed">
              Bergabunglah bersama ratusan santri lainnya dalam menghafal Al-Qur'an di lingkungan yang kondusif dan islami.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-emerald-600 font-semibold mb-4">Alur Pendaftaran</span>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Cara Mendaftar
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ikuti langkah-langkah berikut untuk mendaftar sebagai santri baru di Pondok Pesantren Darurrohman.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-100 rounded-xl p-6 h-full">
                  <div className="bg-emerald-700 text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold mb-4">
                    {step.number}
                  </div>
                  <div className="bg-emerald-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-emerald-300" size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="inline-block text-emerald-600 font-semibold mb-4">Persyaratan</span>
              <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
                Syarat Pendaftaran
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Pastikan Anda memenuhi seluruh persyaratan berikut sebelum mendaftar. Berkas yang tidak lengkap tidak akan diproses.
              </p>
              <div className="bg-emerald-700 text-white p-6 rounded-xl">
                <h3 className="text-xl mb-4">Informasi Penting</h3>
                <ul className="space-y-2 text-emerald-50">
                  <li>• Pendaftaran dibuka setiap bulan Januari, Maret, dan Mei</li>
                  <li>• Kuota terbatas per gelombang pendaftaran</li>
                  <li>• Biaya pendaftaran tidak dapat dikembalikan</li>
                  <li>• Hasil tes akan diumumkan via email dan WhatsApp</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-2xl mb-6 text-gray-900">Checklist Persyaratan</h3>
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-emerald-50 rounded-full p-1 flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-emerald-600 font-semibold mb-4">Jadwal Pendaftaran</span>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Gelombang Pendaftaran 2026
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilih gelombang pendaftaran yang sesuai dengan jadwal Anda. Kuota terbatas untuk setiap gelombang.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {batchSchedule.map((schedule, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-100 rounded-xl p-8"
              >
                <div className="bg-emerald-700 text-white px-4 py-2 rounded-lg inline-block mb-6">
                  {schedule.batch}
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Periode Pendaftaran</div>
                    <div className="text-gray-900 font-semibold">{schedule.period}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Tes Seleksi</div>
                    <div className="text-gray-900 font-semibold">{schedule.test}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Pengumuman</div>
                    <div className="text-gray-900 font-semibold">{schedule.announcement}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-emerald-600 font-semibold mb-4">Biaya Pendidikan</span>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Rincian Biaya
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berikut adalah rincian biaya yang diperlukan untuk santri baru. Biaya sudah termasuk fasilitas lengkap.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {fees.map((fee, index) => (
                <div
                  key={index}
                  className={`p-6 flex items-start gap-6 ${
                    index !== fees.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <div className="bg-emerald-50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl text-gray-900">{fee.category}</h3>
                      <div className="text-2xl text-emerald-700 font-semibold">{fee.amount}</div>
                    </div>
                    <p className="text-gray-600">{fee.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-emerald-50 border border-emerald-100 rounded-xl p-6">
              <h3 className="text-lg mb-3 text-gray-900">Catatan Biaya:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Tersedia program beasiswa untuk santri berprestasi</li>
                <li>• Cicilan pembayaran dapat diatur dengan pihak pondok</li>
                <li>• Biaya sudah termasuk asrama, makan 3x sehari, dan pembelajaran</li>
                <li>• Tidak ada biaya tambahan untuk kegiatan kurikuler</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-700 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Siap Mendaftar?
          </h2>
          <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
            Jangan lewatkan kesempatan bergabung dengan kami. Hubungi kami untuk informasi lebih lanjut atau konsultasi pendaftaran.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/628123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-emerald-700 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors group"
            >
              Daftar via WhatsApp
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="tel:+628123456789"
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
