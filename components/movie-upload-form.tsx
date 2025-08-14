"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Film, ImageIcon, Info, Calendar, Clock, Tag, Star, User, FileText } from "lucide-react"

export function MovieUploadForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    genre: "",
    year: "",
    duration: "",
    director: "",
    cast: "",
    rating: "",
    type: "movie", // movie or series
  })

  const [movieFile, setMovieFile] = useState<File | null>(null)
  const [posterFile, setPosterFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleMovieFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMovieFile(e.target.files[0])
    }
  }

  const handlePosterFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPosterFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsUploading(true)

    // Simulate upload process
    await new Promise((resolve) => setTimeout(resolve, 3000))

    alert(`${formData.type === "movie" ? "فیلم" : "سریال"} "${formData.title}" با موفقیت آپلود شد!`)
    setIsUploading(false)

    // Reset form
    setFormData({
      title: "",
      description: "",
      genre: "",
      year: "",
      duration: "",
      director: "",
      cast: "",
      rating: "",
      type: "movie",
    })
    setMovieFile(null)
    setPosterFile(null)
  }

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-800 to-green-900 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2 font-serif">پنل آپلود محتوا</h2>
        <p className="text-green-100">فیلم یا سریال جدید خود را به مجموعه گلابیو اضافه کنید</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Content Type Selection */}
        <Card className="border-2 border-green-200 shadow-lg">
          <CardHeader className="bg-green-50">
            <CardTitle className="flex items-center gap-2 text-green-800">
              <FileText className="w-5 h-5" />
              نوع محتوا
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="movie"
                  checked={formData.type === "movie"}
                  onChange={handleInputChange}
                  className="text-green-600 focus:ring-green-500"
                />
                <span className="text-green-800 font-medium">فیلم</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="series"
                  checked={formData.type === "series"}
                  onChange={handleInputChange}
                  className="text-green-600 focus:ring-green-500"
                />
                <span className="text-green-800 font-medium">سریال</span>
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Movie/Series File Upload */}
        <Card className="border-2 border-green-200 shadow-lg">
          <CardHeader className="bg-green-50">
            <CardTitle className="flex items-center gap-2 text-green-800">
              <Film className="w-5 h-5" />
              فایل {formData.type === "movie" ? "فیلم" : "سریال"}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="movie-file"
                className="flex flex-col items-center justify-center w-full h-40 border-2 border-green-300 border-dashed rounded-xl cursor-pointer bg-green-50 hover:bg-green-100 transition-colors"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-10 h-10 mb-4 text-green-600" />
                  <p className="mb-2 text-lg text-green-700 font-medium">
                    <span className="font-bold">کلیک کنید</span> یا فایل را بکشید
                  </p>
                  <p className="text-sm text-green-600">MP4, AVI, MKV (حداکثر 5GB)</p>
                  <p className="text-xs text-green-500 mt-1">فرمت‌های پشتیبانی شده: H.264, H.265</p>
                </div>
                <input
                  id="movie-file"
                  type="file"
                  className="hidden"
                  accept="video/*"
                  onChange={handleMovieFileChange}
                  required
                />
              </label>
            </div>
            {movieFile && (
              <div className="mt-4 p-4 bg-green-100 rounded-lg border border-green-300">
                <div className="flex items-center gap-3">
                  <Film className="w-5 h-5 text-green-700" />
                  <div>
                    <p className="text-green-800 font-medium">فایل انتخاب شده:</p>
                    <p className="text-green-700 text-sm">{movieFile.name}</p>
                    <p className="text-green-600 text-xs">حجم: {(movieFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Cover/Poster Upload */}
        <Card className="border-2 border-green-200 shadow-lg">
          <CardHeader className="bg-green-50">
            <CardTitle className="flex items-center gap-2 text-green-800">
              <ImageIcon className="w-5 h-5" />
              کاور {formData.type === "movie" ? "فیلم" : "سریال"}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="poster-file"
                className="flex flex-col items-center justify-center w-full h-40 border-2 border-green-300 border-dashed rounded-xl cursor-pointer bg-green-50 hover:bg-green-100 transition-colors"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <ImageIcon className="w-10 h-10 mb-4 text-green-600" />
                  <p className="mb-2 text-lg text-green-700 font-medium">
                    <span className="font-bold">کلیک کنید</span> یا تصویر را بکشید
                  </p>
                  <p className="text-sm text-green-600">JPG, PNG, WebP (حداکثر 10MB)</p>
                  <p className="text-xs text-green-500 mt-1">ابعاد پیشنهادی: 300x450 پیکسل</p>
                </div>
                <input
                  id="poster-file"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handlePosterFileChange}
                  required
                />
              </label>
            </div>
            {posterFile && (
              <div className="mt-4 p-4 bg-green-100 rounded-lg border border-green-300">
                <div className="flex items-center gap-3">
                  <ImageIcon className="w-5 h-5 text-green-700" />
                  <div>
                    <p className="text-green-800 font-medium">تصویر انتخاب شده:</p>
                    <p className="text-green-700 text-sm">{posterFile.name}</p>
                    <p className="text-green-600 text-xs">حجم: {(posterFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Basic Information */}
        <Card className="border-2 border-green-200 shadow-lg">
          <CardHeader className="bg-green-50">
            <CardTitle className="flex items-center gap-2 text-green-800">
              <Info className="w-5 h-5" />
              اطلاعات اصلی
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-green-800 font-medium text-lg">
                نام {formData.type === "movie" ? "فیلم" : "سریال"} *
              </Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder={`نام ${formData.type === "movie" ? "فیلم" : "سریال"} را وارد کنید`}
                required
                className="border-green-300 focus:border-green-500 focus:ring-green-500 text-lg p-3"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-green-800 font-medium">
                خلاصه داستان
              </Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="خلاصه‌ای از داستان و محتوای اثر..."
                rows={4}
                className="border-green-300 focus:border-green-500 focus:ring-green-500"
              />
            </div>
          </CardContent>
        </Card>

        {/* Detailed Information */}
        <Card className="border-2 border-green-200 shadow-lg">
          <CardHeader className="bg-green-50">
            <CardTitle className="flex items-center gap-2 text-green-800">
              <Tag className="w-5 h-5" />
              اطلاعات تکمیلی
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="director" className="text-green-800 font-medium flex items-center gap-2">
                  <User className="w-4 h-4" />
                  کارگردان
                </Label>
                <Input
                  id="director"
                  name="director"
                  value={formData.director}
                  onChange={handleInputChange}
                  placeholder="نام کارگردان"
                  className="border-green-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cast" className="text-green-800 font-medium">
                  بازیگران اصلی
                </Label>
                <Input
                  id="cast"
                  name="cast"
                  value={formData.cast}
                  onChange={handleInputChange}
                  placeholder="نام بازیگران اصلی (با کاما جدا کنید)"
                  className="border-green-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="genre" className="text-green-800 font-medium flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  ژانر
                </Label>
                <Input
                  id="genre"
                  name="genre"
                  value={formData.genre}
                  onChange={handleInputChange}
                  placeholder="درام، کمدی، اکشن"
                  className="border-green-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="year" className="text-green-800 font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  سال تولید
                </Label>
                <Input
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  placeholder="1402"
                  type="number"
                  min="1300"
                  max="1410"
                  className="border-green-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration" className="text-green-800 font-medium flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  مدت زمان
                </Label>
                <Input
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  placeholder="120 دقیقه"
                  className="border-green-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="rating" className="text-green-800 font-medium flex items-center gap-2">
                <Star className="w-4 h-4" />
                امتیاز (از 10)
              </Label>
              <Input
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
                placeholder="8.5"
                type="number"
                min="0"
                max="10"
                step="0.1"
                className="border-green-300 focus:border-green-500 focus:ring-green-500 max-w-xs"
              />
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-center pt-6">
          <Button
            type="submit"
            disabled={isUploading || !movieFile || !posterFile || !formData.title}
            className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white px-12 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isUploading ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white ml-3"></div>
                در حال آپلود...
              </>
            ) : (
              <>
                <Upload className="w-6 h-6 ml-3" />
                آپلود {formData.type === "movie" ? "فیلم" : "سریال"}
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
