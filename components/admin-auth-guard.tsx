"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface AdminAuthGuardProps {
  children: React.ReactNode
}

export function AdminAuthGuard({ children }: AdminAuthGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [showLogin, setShowLogin] = useState(false)
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  const [error, setError] = useState("")
  const router = useRouter()

  useEffect(() => {
    // Check if admin is already logged in
    const adminToken = localStorage.getItem("admin_token")
    if (adminToken === "golabio_admin_authenticated") {
      setIsAuthenticated(true)
    } else {
      setShowLogin(true)
    }
    setIsLoading(false)
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Simple admin authentication (in production, use proper backend authentication)
    if (credentials.username === "admin" && credentials.password === "golabio2024") {
      localStorage.setItem("admin_token", "golabio_admin_authenticated")
      setIsAuthenticated(true)
      setShowLogin(false)
    } else {
      setError("نام کاربری یا رمز عبور اشتباه است")
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("admin_token")
    setIsAuthenticated(false)
    setShowLogin(true)
    router.push("/")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-black flex items-center justify-center">
        <div className="text-green-600 text-xl">در حال بارگذاری...</div>
      </div>
    )
  }

  if (!isAuthenticated && showLogin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-black flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-green-800 mb-2 font-serif">ورود ادمین</h1>
            <p className="text-gray-600">برای دسترسی به پنل مدیریت وارد شوید</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <Label htmlFor="username" className="text-right block mb-2 text-green-800">
                نام کاربری
              </Label>
              <Input
                id="username"
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials((prev) => ({ ...prev, username: e.target.value }))}
                className="w-full text-right"
                placeholder="نام کاربری ادمین"
                required
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-right block mb-2 text-green-800">
                رمز عبور
              </Label>
              <Input
                id="password"
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials((prev) => ({ ...prev, password: e.target.value }))}
                className="w-full text-right"
                placeholder="رمز عبور"
                required
              />
            </div>

            {error && <div className="text-red-600 text-center text-sm bg-red-50 p-3 rounded-lg">{error}</div>}

            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
            >
              ورود به پنل ادمین
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Button variant="ghost" onClick={() => router.push("/")} className="text-green-600 hover:text-green-800">
              بازگشت به صفحه اصلی
            </Button>
          </div>

          <div className="mt-8 p-4 bg-green-50 rounded-lg text-sm text-green-800">
            <p className="font-semibold mb-1">اطلاعات ورود آزمایشی:</p>
            <p>نام کاربری: admin</p>
            <p>رمز عبور: golabio2024</p>
          </div>
        </div>
      </div>
    )
  }

  if (isAuthenticated) {
    return (
      <div>
        <div className="bg-green-800 text-white p-2 text-center text-sm">
          <span>شما به عنوان ادمین وارد شده‌اید</span>
          <Button variant="ghost" size="sm" onClick={handleLogout} className="mr-4 text-white hover:text-green-200">
            خروج
          </Button>
        </div>
        {children}
      </div>
    )
  }

  return null
}
