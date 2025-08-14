"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      alert("رمز عبور و تکرار آن یکسان نیستند")
      return
    }

    setIsLoading(true)

    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false)
      alert("ثبت نام با موفقیت انجام شد!")
      window.location.href = "/auth/login"
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gray-900 border-green-500/20">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-green-400">ثبت نام در گلابیو</CardTitle>
          <CardDescription className="text-gray-400">حساب کاربری جدید ایجاد کنید</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-green-400">
                نام و نام خانوادگی
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-800 border-green-500/30 text-white focus:border-green-400"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-green-400">
                ایمیل
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-800 border-green-500/30 text-white focus:border-green-400"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-green-400">
                رمز عبور
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="bg-gray-800 border-green-500/30 text-white focus:border-green-400"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-green-400">
                تکرار رمز عبور
              </Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="bg-gray-800 border-green-500/30 text-white focus:border-green-400"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white" disabled={isLoading}>
              {isLoading ? "در حال ثبت نام..." : "ثبت نام"}
            </Button>
          </form>
          <div className="mt-4 text-center">
            <Link href="/auth/login" className="text-green-400 hover:text-green-300 text-sm">
              قبلاً ثبت نام کرده‌اید؟ وارد شوید
            </Link>
          </div>
          <div className="mt-2 text-center">
            <Link href="/" className="text-gray-400 hover:text-gray-300 text-sm">
              بازگشت به صفحه اصلی
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
