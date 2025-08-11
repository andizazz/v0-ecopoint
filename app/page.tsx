import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Recycle, Gift, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-green-600 mr-2" />
              <span className="text-2xl font-bold text-gray-900">Eco Point</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#features" className="text-gray-500 hover:text-gray-900">
                Fitur
              </Link>
              <Link href="#how-it-works" className="text-gray-500 hover:text-gray-900">
                Cara Kerja
              </Link>
              <Link href="#about" className="text-gray-500 hover:text-gray-900">
                Tentang
              </Link>
            </nav>
            <div className="flex space-x-4">
              <Link href="/login">
                <Button variant="outline">Masuk</Button>
              </Link>
              <Link href="/register">
                <Button>Daftar</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Kelola Sampah, <span className="text-green-600">Raih Poin</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Bergabunglah dengan revolusi pengelolaan sampah! Setor sampah Anda, dapatkan poin, dan tukarkan dengan
            hadiah menarik. Mari bersama-sama menciptakan lingkungan yang lebih bersih dan berkelanjutan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Mulai Sekarang
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button size="lg" variant="outline">
                Pelajari Lebih Lanjut
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fitur Unggulan</h2>
            <p className="text-xl text-gray-600">Sistem yang mudah dan efisien untuk pengelolaan sampah</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <Recycle className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Setor Sampah</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Setor berbagai jenis sampah dan dapatkan poin berdasarkan berat dan kategori sampah
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Gift className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Tukar Reward</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Tukarkan poin Anda dengan berbagai hadiah menarik dan voucher belanja</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Komunitas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Bergabung dengan komunitas peduli lingkungan dan lihat kontribusi Anda
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Leaf className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Dampak Lingkungan</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Pantau dampak positif Anda terhadap lingkungan melalui dashboard khusus
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cara Kerja</h2>
            <p className="text-xl text-gray-600">Tiga langkah mudah untuk mulai berkontribusi</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Daftar Akun</h3>
              <p className="text-gray-600">Buat akun gratis dan lengkapi profil Anda untuk mulai menggunakan layanan</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Setor Sampah</h3>
              <p className="text-gray-600">
                Bawa sampah ke titik pengumpulan dan catat jenis serta beratnya di aplikasi
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Tukar Poin</h3>
              <p className="text-gray-600">Kumpulkan poin dan tukarkan dengan hadiah menarik di katalog reward</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Leaf className="h-8 w-8 text-green-600 mr-2" />
                <span className="text-2xl font-bold">Eco Point</span>
              </div>
              <p className="text-gray-400">
                Platform pengelolaan sampah yang mengubah kebiasaan menjadi kontribusi nyata untuk lingkungan.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Pengumpulan Sampah</li>
                <li>Sistem Poin</li>
                <li>Katalog Reward</li>
                <li>Tracking Dampak</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Dukungan</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Pusat Bantuan</li>
                <li>FAQ</li>
                <li>Kontak</li>
                <li>Panduan</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontak</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@ecopoint.id</li>
                <li>Telepon: (021) 1234-5678</li>
                <li>Alamat: Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Eco Point. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
