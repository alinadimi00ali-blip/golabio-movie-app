"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Edit, Trash2, Plus, Eye, Star, Calendar, Clock, Film } from "lucide-react"
import Link from "next/link"

// Mock data for demonstration
const mockMovies = [
  {
    id: 1,
    title: "سینمای ایران",
    director: "علی حاتمی",
    year: "1401",
    genre: "درام",
    duration: "120 دقیقه",
    rating: 8.5,
    poster: "/persian-cinema-poster.png",
    status: "published",
    views: 1250,
    uploadDate: "1402/10/15",
  },
  {
    id: 2,
    title: "عشق در تهران",
    director: "مریم کاظمی",
    year: "1402",
    genre: "عاشقانه",
    duration: "95 دقیقه",
    rating: 7.8,
    poster: "/persian-romance-movie-poster.png",
    status: "published",
    views: 890,
    uploadDate: "1402/11/02",
  },
  {
    id: 3,
    title: "کمدی شب",
    director: "رضا احمدی",
    year: "1402",
    genre: "کمدی",
    duration: "110 دقیقه",
    rating: 8.2,
    poster: "/persian-comedy-movie-poster.png",
    status: "draft",
    views: 0,
    uploadDate: "1402/11/20",
  },
]

export function MovieManagementDashboard() {
  const [movies, setMovies] = useState(mockMovies)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [selectedMovie, setSelectedMovie] = useState<any>(null)

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch =
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.director.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || movie.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const handleDelete = (movieId: number) => {
    if (confirm("آیا از حذف این فیلم اطمینان دارید؟")) {
      setMovies(movies.filter((movie) => movie.id !== movieId))
    }
  }

  const handleStatusChange = (movieId: number, newStatus: string) => {
    setMovies(movies.map((movie) => (movie.id === movieId ? { ...movie, status: newStatus } : movie)))
  }

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-4 h-4" />
            <Input
              placeholder="جستجو در فیلم‌ها..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10 border-purple-300 focus:border-purple-500"
            />
          </div>

          <div className="flex gap-2">
            <Button
              variant={filterStatus === "all" ? "default" : "outline"}
              onClick={() => setFilterStatus("all")}
              className="text-sm"
            >
              همه
            </Button>
            <Button
              variant={filterStatus === "published" ? "default" : "outline"}
              onClick={() => setFilterStatus("published")}
              className="text-sm"
            >
              منتشر شده
            </Button>
            <Button
              variant={filterStatus === "draft" ? "default" : "outline"}
              onClick={() => setFilterStatus("draft")}
              className="text-sm"
            >
              پیش‌نویس
            </Button>
          </div>
        </div>

        <Link href="/admin/upload">
          <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
            <Plus className="w-4 h-4 ml-2" />
            فیلم جدید
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600">کل فیلم‌ها</p>
                <p className="text-2xl font-bold text-purple-900">{movies.length}</p>
              </div>
              <Film className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600">منتشر شده</p>
                <p className="text-2xl font-bold text-green-900">
                  {movies.filter((m) => m.status === "published").length}
                </p>
              </div>
              <Eye className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-600">پیش‌نویس</p>
                <p className="text-2xl font-bold text-orange-900">
                  {movies.filter((m) => m.status === "draft").length}
                </p>
              </div>
              <Edit className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">کل بازدید</p>
                <p className="text-2xl font-bold text-blue-900">
                  {movies.reduce((sum, movie) => sum + movie.views, 0).toLocaleString()}
                </p>
              </div>
              <Star className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredMovies.map((movie) => (
          <Card key={movie.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img src={movie.poster || "/placeholder.svg"} alt={movie.title} className="w-full h-48 object-cover" />
              <div className="absolute top-2 right-2">
                <Badge
                  variant={movie.status === "published" ? "default" : "secondary"}
                  className={movie.status === "published" ? "bg-green-500" : "bg-orange-500"}
                >
                  {movie.status === "published" ? "منتشر شده" : "پیش‌نویس"}
                </Badge>
              </div>
              <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                {movie.rating}
              </div>
            </div>

            <CardContent className="p-4">
              <div className="space-y-3">
                <div>
                  <h3 className="font-bold text-lg text-purple-900 mb-1">{movie.title}</h3>
                  <p className="text-sm text-purple-600">کارگردان: {movie.director}</p>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {movie.year}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {movie.duration}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-purple-600 border-purple-300">
                    {movie.genre}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Eye className="w-4 h-4" />
                    {movie.views.toLocaleString()}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 text-purple-600 border-purple-300 hover:bg-purple-50 bg-transparent"
                  >
                    <Edit className="w-4 h-4 ml-1" />
                    ویرایش
                  </Button>

                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleStatusChange(movie.id, movie.status === "published" ? "draft" : "published")}
                    className="flex-1"
                  >
                    {movie.status === "published" ? "عدم انتشار" : "انتشار"}
                  </Button>

                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(movie.id)}
                    className="text-red-600 border-red-300 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredMovies.length === 0 && (
        <div className="text-center py-12">
          <Film className="w-16 h-16 text-purple-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-purple-900 mb-2">فیلمی یافت نشد</h3>
          <p className="text-purple-600 mb-4">هیچ فیلمی با این معیارها پیدا نشد</p>
          <Link href="/admin/upload">
            <Button>
              <Plus className="w-4 h-4 ml-2" />
              اولین فیلم را اضافه کنید
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}
