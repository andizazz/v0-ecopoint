"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Leaf, Users, Recycle, Gift, TrendingUp, CheckCircle, XCircle } from "lucide-react"

export default function AdminPage() {
  const [stats] = useState({
    totalUsers: 1234,
    totalDeposits: 5678,
    totalPoints: 123456,
    totalRedemptions: 234,
  })

  const [pendingDeposits] = useState([
    { id: 1, user: "John Doe", type: "Plastik", weight: 2.5, points: 50, date: "2024-01-16" },
    { id: 2, user: "Jane Smith", type: "Kertas", weight: 1.8, points: 27, date: "2024-01-16" },
    { id: 3, user: "Bob Wilson", type: "Logam", weight: 0.5, points: 25, date: "2024-01-15" },
  ])

  const [recentUsers] = useState([
    { id: 1, name: "Alice Johnson", email: "alice@example.com", points: 450, level: "Silver", joinDate: "2024-01-15" },
    { id: 2, name: "Mike Brown", email: "mike@example.com", points: 200, level: "Bronze", joinDate: "2024-01-14" },
    { id: 3, name: "Sarah Davis", email: "sarah@example.com", points: 800, level: "Gold", joinDate: "2024-01-13" },
  ])

  const handleApproveDeposit = (depositId: number) => {
    alert(`Setoran ID ${depositId} telah disetujui!`)
  }

  const handleRejectDeposit = (depositId: number) => {
    alert(`Setoran ID ${depositId} telah ditolak!`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-green-600 mr-2" />
              <span className="text-2xl font-bold text-gray-900">Eco Point Admin</span>
            </div>
            <Button variant="outline">Keluar</Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Admin</h1>
          <p className="text-gray-600">Kelola sistem Eco Point dan pantau aktivitas pengguna</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Pengguna</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{stats.totalUsers.toLocaleString()}</div>
              <p className="text-xs text-gray-600">Pengguna terdaftar</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Setoran</CardTitle>
              <Recycle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.totalDeposits.toLocaleString()}</div>
              <p className="text-xs text-gray-600">Setoran sampah</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Poin</CardTitle>
              <TrendingUp className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{stats.totalPoints.toLocaleString()}</div>
              <p className="text-xs text-gray-600">Poin diberikan</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Penukaran</CardTitle>
              <Gift className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{stats.totalRedemptions.toLocaleString()}</div>
              <p className="text-xs text-gray-600">Reward ditukar</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="deposits" className="space-y-6">
          <TabsList>
            <TabsTrigger value="deposits">Setoran Pending</TabsTrigger>
            <TabsTrigger value="users">Pengguna Baru</TabsTrigger>
            <TabsTrigger value="rewards">Kelola Reward</TabsTrigger>
          </TabsList>

          <TabsContent value="deposits">
            <Card>
              <CardHeader>
                <CardTitle>Setoran Menunggu Verifikasi</CardTitle>
                <CardDescription>Verifikasi setoran sampah dari pengguna</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingDeposits.map((deposit) => (
                    <div key={deposit.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-4">
                          <div>
                            <p className="font-medium">{deposit.user}</p>
                            <p className="text-sm text-gray-600">
                              {deposit.type} • {deposit.weight} kg • {deposit.points} poin
                            </p>
                            <p className="text-xs text-gray-500">{deposit.date}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => handleApproveDeposit(deposit.id)}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Setujui
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => handleRejectDeposit(deposit.id)}>
                          <XCircle className="h-4 w-4 mr-1" />
                          Tolak
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>Pengguna Baru</CardTitle>
                <CardDescription>Daftar pengguna yang baru bergabung</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-gray-600">{user.email}</p>
                        <p className="text-xs text-gray-500">Bergabung: {user.joinDate}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{user.points} poin</p>
                        <Badge
                          variant="secondary"
                          className={
                            user.level === "Gold"
                              ? "bg-yellow-100 text-yellow-800"
                              : user.level === "Silver"
                                ? "bg-gray-100 text-gray-800"
                                : "bg-orange-100 text-orange-800"
                          }
                        >
                          {user.level}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rewards">
            <Card>
              <CardHeader>
                <CardTitle>Kelola Reward</CardTitle>
                <CardDescription>Tambah, edit, atau hapus reward yang tersedia</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Gift className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Fitur kelola reward akan segera hadir</p>
                  <Button>Tambah Reward Baru</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
