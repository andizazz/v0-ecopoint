"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Leaf, Search, Gift, ShoppingCart, Award } from "lucide-react"

export default function RewardsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [userPoints] = useState(2450)

  const categories = [
    { value: "all", label: "Semua" },
    { value: "voucher", label: "Voucher" },
    { value: "electronics", label: "Elektronik" },
    { value: "household", label: "Rumah Tangga" },
    { value: "food", label: "Makanan" },
    { value: "fashion", label: "Fashion" },
  ]

  const rewards = [
    {
      id: 1,
      name: "Voucher Belanja Indomaret",
      description: "Voucher belanja senilai Rp 50.000",
      points: 500,
      category: "voucher",
      image: "/generic-retail-voucher.png",
      stock: 25,
    },
    {
      id: 2,
      name: "Tumbler Stainless Steel",
      description: "Tumbler ramah lingkungan 500ml",
      points: 800,
      category: "household",
      image: "/stainless-steel-tumbler.png",
      stock: 15,
    },
    {
      id: 3,
      name: "Voucher Grab Food",
      description: "Voucher makanan senilai Rp 75.000",
      points: 750,
      category: "food",
      image: "/grabbing-food-voucher.png",
      stock: 30,
    },
    {
      id: 4,
      name: "Power Bank 10000mAh",
      description: "Power bank portable dengan fast charging",
      points: 1500,
      category: "electronics",
      image: "/placeholder-m0t9r.png",
      stock: 8,
    },
    {
      id: 5,
      name: "Tas Belanja Kanvas",
      description: "Tas belanja ramah lingkungan",
      points: 300,
      category: "fashion",
      image: "/canvas-shopping-bag.png",
      stock: 50,
    },
    {
      id: 6,
      name: "Voucher Shopee",
      description: "Voucher belanja online Rp 100.000",
      points: 1000,
      category: "voucher",
      image: "/generic-discount-coupon.png",
      stock: 20,
    },
  ]

  const filteredRewards = rewards.filter((reward) => {
    const matchesSearch = reward.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || reward.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleRedeem = (reward: (typeof rewards)[0]) => {
    if (userPoints >= reward.points) {
      alert(`Berhasil menukar ${reward.name}! Poin Anda berkurang ${reward.points}.`)
    } else {
      alert(`Poin Anda tidak cukup. Anda membutuhkan ${reward.points - userPoints} poin lagi.`)
    }
  }

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
              <Link href="/dashboard" className="text-gray-500 hover:text-gray-900">
                Dashboard
              </Link>
              <Link href="/deposit" className="text-gray-500 hover:text-gray-900">
                Setor Sampah
              </Link>
              <Link href="/rewards" className="text-green-600 font-medium">
                Rewards
              </Link>
              <Link href="/history" className="text-gray-500 hover:text-gray-900">
                Riwayat
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-yellow-50 px-3 py-2 rounded-lg">
                <Award className="h-4 w-4 text-yellow-600 mr-2" />
                <span className="font-bold text-yellow-600">{userPoints.toLocaleString()} Poin</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Katalog Reward</h1>
          <p className="text-gray-600">Tukarkan poin Anda dengan berbagai hadiah menarik</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Cari reward..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
                className={selectedCategory === category.value ? "bg-green-600 hover:bg-green-700" : ""}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Rewards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRewards.map((reward) => (
            <Card key={reward.id} className="overflow-hidden">
              <div className="aspect-video bg-gray-100">
                <img
                  src={reward.image || "/placeholder.svg"}
                  alt={reward.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{reward.name}</CardTitle>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {reward.points} poin
                  </Badge>
                </div>
                <CardDescription>{reward.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-600">Stok: {reward.stock}</span>
                  <Badge variant={reward.stock > 10 ? "default" : "destructive"}>
                    {reward.stock > 10 ? "Tersedia" : "Terbatas"}
                  </Badge>
                </div>
                <Button
                  onClick={() => handleRedeem(reward)}
                  disabled={userPoints < reward.points || reward.stock === 0}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300"
                >
                  <Gift className="h-4 w-4 mr-2" />
                  {userPoints < reward.points
                    ? "Poin Tidak Cukup"
                    : reward.stock === 0
                      ? "Stok Habis"
                      : "Tukar Sekarang"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRewards.length === 0 && (
          <div className="text-center py-12">
            <ShoppingCart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Tidak ada reward ditemukan</h3>
            <p className="text-gray-600">Coba ubah kata kunci pencarian atau filter kategori</p>
          </div>
        )}
      </div>
    </div>
  )
}
