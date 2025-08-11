"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Leaf, ArrowLeft, Calculator } from "lucide-react"

export default function DepositPage() {
  const [formData, setFormData] = useState({
    wasteType: "",
    weight: "",
    location: "",
    notes: "",
  })

  const [calculatedPoints, setCalculatedPoints] = useState(0)

  const wasteTypes = [
    { value: "plastic", label: "Plastik", pointsPerKg: 20 },
    { value: "paper", label: "Kertas", pointsPerKg: 15 },
    { value: "metal", label: "Logam", pointsPerKg: 50 },
    { value: "glass", label: "Kaca", pointsPerKg: 25 },
    { value: "organic", label: "Organik", pointsPerKg: 10 },
    { value: "electronic", label: "Elektronik", pointsPerKg: 100 },
  ]

  const calculatePoints = () => {
    const selectedWaste = wasteTypes.find((type) => type.value === formData.wasteType)
    const weight = Number.parseFloat(formData.weight)

    if (selectedWaste && weight > 0) {
      const points = Math.floor(selectedWaste.pointsPerKg * weight)
      setCalculatedPoints(points)
    } else {
      setCalculatedPoints(0)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle deposit submission
    console.log("Deposit data:", formData, "Points:", calculatedPoints)
    alert(`Berhasil! Anda mendapatkan ${calculatedPoints} poin dari setoran sampah ini.`)
  }

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    })
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
              <Link href="/deposit" className="text-green-600 font-medium">
                Setor Sampah
              </Link>
              <Link href="/rewards" className="text-gray-500 hover:text-gray-900">
                Rewards
              </Link>
              <Link href="/history" className="text-gray-500 hover:text-gray-900">
                Riwayat
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/dashboard">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali ke Dashboard
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle>Setor Sampah</CardTitle>
              <CardDescription>Isi form di bawah untuk mencatat setoran sampah Anda</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="wasteType">Jenis Sampah</Label>
                  <Select value={formData.wasteType} onValueChange={(value) => handleChange("wasteType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih jenis sampah" />
                    </SelectTrigger>
                    <SelectContent>
                      {wasteTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label} ({type.pointsPerKg} poin/kg)
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="weight">Berat (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    step="0.1"
                    min="0.1"
                    required
                    value={formData.weight}
                    onChange={(e) => handleChange("weight", e.target.value)}
                    placeholder="Masukkan berat sampah"
                  />
                </div>

                <div>
                  <Label htmlFor="location">Lokasi Pengumpulan</Label>
                  <Select value={formData.location} onValueChange={(value) => handleChange("location", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih lokasi" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jakarta-pusat">Jakarta Pusat - Jl. Sudirman</SelectItem>
                      <SelectItem value="jakarta-selatan">Jakarta Selatan - Jl. Senayan</SelectItem>
                      <SelectItem value="jakarta-barat">Jakarta Barat - Jl. Puri Indah</SelectItem>
                      <SelectItem value="jakarta-utara">Jakarta Utara - Jl. Kelapa Gading</SelectItem>
                      <SelectItem value="jakarta-timur">Jakarta Timur - Jl. Cakung</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="notes">Catatan (Opsional)</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleChange("notes", e.target.value)}
                    placeholder="Tambahkan catatan jika diperlukan"
                    rows={3}
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="button" variant="outline" onClick={calculatePoints} className="flex-1 bg-transparent">
                    <Calculator className="h-4 w-4 mr-2" />
                    Hitung Poin
                  </Button>
                  <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700">
                    Setor Sampah
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Point Calculator & Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Kalkulator Poin</CardTitle>
                <CardDescription>Lihat berapa poin yang akan Anda dapatkan</CardDescription>
              </CardHeader>
              <CardContent>
                {calculatedPoints > 0 ? (
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <div className="text-4xl font-bold text-green-600 mb-2">{calculatedPoints}</div>
                    <p className="text-green-700">Poin yang akan didapat</p>
                  </div>
                ) : (
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Pilih jenis sampah dan masukkan berat untuk melihat poin</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Daftar Harga Poin</CardTitle>
                <CardDescription>Nilai poin per kilogram untuk setiap jenis sampah</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {wasteTypes.map((type) => (
                    <div key={type.value} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">{type.label}</span>
                      <span className="text-green-600 font-bold">{type.pointsPerKg} poin/kg</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
