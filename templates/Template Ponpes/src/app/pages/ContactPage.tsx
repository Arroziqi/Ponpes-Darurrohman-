import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

export function ContactPage() {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-emerald-700" />,
      title: 'Telepon',
      detail: '+62 812-3456-7890',
      link: 'tel:+628123456789',
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-emerald-700" />,
      title: 'WhatsApp',
      detail: '+62 812-3456-7890',
      link: 'https://wa.me/628123456789',
    },
    {
      icon: <Mail className="w-6 h-6 text-emerald-700" />,
      title: 'Email',
      detail: 'info@darurrohman.id',
      link: 'mailto:info@darurrohman.id',
    },
    {
      icon: <MapPin className="w-6 h-6 text-emerald-700" />,
      title: 'Alamat',
      detail: 'Jl. Pendidikan No. 123, Kota, Provinsi 12345',
      link: 'https://maps.google.com',
    },
  ];

  const officeHours = [
    { day: 'Senin - Jumat', hours: '08:00 - 16:00 WIB' },
    { day: 'Sabtu', hours: '08:00 - 12:00 WIB' },
    { day: 'Minggu', hours: 'Tutup' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah dikirim. Tim kami akan segera menghubungi Anda.');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-800 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-emerald-600/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm mb-6">
              Kontak Kami
            </span>
            <h1 className="text-4xl md:text-5xl mb-6 leading-tight">
              Hubungi Kami
            </h1>
            <p className="text-xl text-emerald-50 leading-relaxed">
              Punya pertanyaan tentang program tahfidz atau pendaftaran? Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  {info.icon}
                </div>
                <h3 className="text-lg mb-2 text-gray-900">{info.title}</h3>
                <p className="text-gray-600">{info.detail}</p>
              </a>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white">
              <h2 className="text-3xl mb-6 text-gray-900">Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="nama@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="+62 812-3456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subjek
                  </label>
                  <select
                    id="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="">Pilih subjek</option>
                    <option value="pendaftaran">Pendaftaran Santri Baru</option>
                    <option value="program">Informasi Program</option>
                    <option value="kunjungan">Kunjungan Pondok</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-700 text-white px-8 py-4 rounded-lg hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Office Hours & Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-emerald-700 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl text-gray-900">Jam Operasional</h3>
                </div>
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-emerald-100 last:border-0"
                    >
                      <span className="text-gray-700">{schedule.day}</span>
                      <span className="text-emerald-700 font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-emerald-700 text-white rounded-xl p-8">
                <h3 className="text-2xl mb-4">Kunjungi Pondok</h3>
                <p className="text-emerald-50 mb-6 leading-relaxed">
                  Kami menerima kunjungan dari calon santri dan orang tua untuk melihat langsung fasilitas dan bertemu dengan pengurus pondok.
                </p>
                <a
                  href="https://wa.me/628123456789?text=Assalamualaikum,%20saya%20ingin%20menjadwalkan%20kunjungan%20ke%20Pondok%20Pesantren%20Darurrohman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-emerald-700 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors w-full"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Jadwalkan Kunjungan
                </a>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-xl p-8">
                <h3 className="text-2xl mb-4 text-gray-900">Informasi Cepat</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Balasan email dalam 1x24 jam</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>WhatsApp aktif 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Konsultasi gratis untuk calon santri</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Tersedia panduan lengkap pendaftaran</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-emerald-600 font-semibold mb-4">Lokasi Kami</span>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Temukan Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pondok Pesantren Darurrohman berlokasi di area yang strategis dan mudah diakses dengan lingkungan yang kondusif untuk belajar.
            </p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            {/* Map Placeholder */}
            <div className="relative h-96 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.1753924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sJakarta!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Pondok Pesantren Darurrohman"
              ></iframe>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-emerald-50 to-white">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg mb-2 text-gray-900">Alamat Lengkap</h3>
                  <p className="text-gray-600">
                    Jl. Pendidikan No. 123<br />
                    Kelurahan, Kecamatan<br />
                    Kota, Provinsi 12345
                  </p>
                </div>
                <div>
                  <h3 className="text-lg mb-2 text-gray-900">Akses Transportasi</h3>
                  <p className="text-gray-600">
                    • 5 menit dari Terminal Kota<br />
                    • 10 menit dari Stasiun<br />
                    • 20 menit dari Bandara
                  </p>
                </div>
                <div>
                  <h3 className="text-lg mb-2 text-gray-900">Landmark</h3>
                  <p className="text-gray-600">
                    Dekat dengan Masjid Agung<br />
                    Sebelah Taman Kota<br />
                    Belakang Mall Besar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-emerald-600 font-semibold mb-4">FAQ</span>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Pertanyaan Umum
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-xl p-6">
              <h3 className="text-xl mb-3 text-gray-900">Berapa lama proses pendaftaran?</h3>
              <p className="text-gray-600 leading-relaxed">
                Proses pendaftaran memakan waktu sekitar 2-3 minggu dari pendaftaran hingga pengumuman hasil seleksi.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-xl p-6">
              <h3 className="text-xl mb-3 text-gray-900">Apakah tersedia program beasiswa?</h3>
              <p className="text-gray-600 leading-relaxed">
                Ya, kami menyediakan program beasiswa untuk santri berprestasi dan yang membutuhkan bantuan finansial. Silakan hubungi kami untuk informasi lebih lanjut.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-xl p-6">
              <h3 className="text-xl mb-3 text-gray-900">Bisakah orang tua mengunjungi santri?</h3>
              <p className="text-gray-600 leading-relaxed">
                Tentu, orang tua dapat mengunjungi santri pada hari dan jam yang telah ditentukan. Kunjungan dapat dijadwalkan sebelumnya melalui kantor pondok.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
