"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Plus, Gift, TrendingUp, Recycle, Award, LogOut } from "lucide-react"

export default function DashboardPage() {
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    totalPoints: 2450,
    level: "Gold",
    wasteDeposited: 125.5,
    co2Saved: 89.2,
  })

  const [recentTransactions] = useState([
    { id: 1, type: "Plastik", weight: 2.5, points: 50, date: "2024-01-15" },
    { id: 2, type: "Kertas", weight: 1.8, points: 36, date: "2024-01-14" },
    { id: 3, type: "Logam", weight: 0.5, points: 25, date: "2024-01-13" },
    { id: 4, type: "Kaca", weight: 3.2, points: 80, date: "2024-01-12" },
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-green-600 mr-2" />
              <span className="text-2xl font-bold text-gray-900">Eco Point</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/dashboard" className="text-green-600 font-medium">
                Dashboard
              </Link>
              <Link href="/deposit" className="text-gray-500 hover:text-gray-900">
                Setor Sampah
              </Link>
              <Link href="/rewards" className="text-gray-500 hover:text-gray-900">
                Rewards
              </Link>
              <Link href="/history" className="text-gray-500 hover:text-gray-900">
                Riwayat
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Halo, {user.name}</span>
              <Button variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Keluar
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Selamat datang kembali, {user.name}!</h1>
          <p className="text-gray-600">Lihat progress kontribusi lingkungan Anda hari ini</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Poin</CardTitle>
              <Award className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{user.totalPoints.toLocaleString()}</div>
              <p className="text-xs text-gray-600">
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                  {user.level}
                </Badge>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sampah Disetor</CardTitle>
              <Recycle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{user.wasteDeposited} kg</div>
              <p className="text-xs text-gray-600">Total bulan ini</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">CO₂ Diselamatkan</CardTitle>
              <Leaf className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{user.co2Saved} kg</div>
              <p className="text-xs text-gray-600">Dampak lingkungan</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ranking</CardTitle>
              <TrendingUp className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">#15</div>
              <p className="text-xs text-gray-600">Dari 1,234 pengguna</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Aksi Cepat</CardTitle>
              <CardDescription>Lakukan aksi untuk mendapatkan lebih banyak poin</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link href="/deposit">
                <Button className="w-full justify-start bg-green-600 hover:bg-green-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Setor Sampah Baru
                </Button>
              </Link>
              <Link href="/rewards">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Gift className="h-4 w-4 mr-2" />
                  Lihat Katalog Reward
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card>
            <CardHeader>
              <CardTitle>Transaksi Terbaru</CardTitle>
              <CardDescription>Riwayat setoran sampah Anda</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{transaction.type}</p>
                      <p className="text-sm text-gray-600">
                        {transaction.weight} kg • {transaction.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-green-600">+{transaction.points} poin</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/history">
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  Lihat Semua Riwayat
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
